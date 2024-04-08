import HCATaskQueue from "./HCATaskQueue";
import HCATask from "./HCATask";
import HCAInfo from "../VGAudio/Codecs/CriHca/HcaInfo";
import HCACipher from "../HCACipher";
import HCACrc16 from "../VGAudio/Utilities/Crc16";
import {suspendAudioCtxIfUnlocked} from'../VGAudio/Utilities/Helpers';
import "./main";

// create & control audio worklet
class HCAAudioWorkletHCAPlayer {
  private static readonly feedByteMax = 32768;

  get isAlive(): boolean {
      return this.taskQueue.isAlive;
  }
  get initialized(): boolean {
      return this._initialized;
  }
  get unlocked(): boolean {
      return this._unlocked;
  }
  private _initialized = true; // initially there must be something to play
  private _unlocked: boolean;
  private isPlaying = false;

  playInBackground = false; // FIXME
  private requestedToPlay = false;

  private source?: Uint8Array | ReadableStreamDefaultReader<Uint8Array>;
  private srcBuf?: Uint8Array;
  private info: HCAInfo;
  private hasLoop: boolean;
  private cipher?: HCACipher;

  private verifyCsum = false;
  get blockChecksumVerification() {
      return this.verifyCsum;
  }
  set blockChecksumVerification(val: boolean) {
      if (typeof val !== "boolean") throw new Error();
      this.verifyCsum = val;
  }

  private readonly feedBlockCount: number;
  private get feedSize(): number {
      return this.info.blockSize * this.feedBlockCount;
  }
  private totalFedBlockCount = 0;
  private get remainingBlockCount(): number {
      let total = this.hasLoop ? this.info.loop.end + 1 : this.info.format.blockCount;
      let remaining = total - this.totalFedBlockCount;
      if (remaining <= 0) throw new Error();
      return remaining;
  }

  private get downloadBufferSize(): number {
      const bytesPerSec = this.info.kbps * 1000 / 8;
      return bytesPerSec * 4;
  }

  private readonly selfUrl: URL;
  readonly sampleRate: number;
  readonly channelCount: number;
  private readonly audioCtx: AudioContext;
  private readonly hcaPlayerNode: AudioWorkletNode;
  private readonly gainNode: GainNode;

  get volume(): number {
      return this.gainNode.gain.value;
  }
  set volume(val: number) {
      if (isNaN(val)) return;
      if (val > 1.0) val = 1.0;
      if (val < 0) val = 0;
      this.gainNode.gain.value = val;
  }

  private readonly taskQueue: HCATaskQueue;

  private async taskHandler(task: HCATask): Promise<Uint8Array | undefined> {
      switch (task.cmd) {
          case "nop":
              return;
          case "self-destruct": // doesn't seem to have a chance to be called
              console.error(`HCAFramePlayer requested to self-destruct`);
              await this.taskQueue.shutdown(true);
              return;
          case "end":
              await this.stop();
              return; // actually not sending back reply
          case "pull":
              if (this.source == null) throw new Error(`nothing to feed`); // should never happen
              let blockCount = Math.min(this.feedBlockCount, this.remainingBlockCount);
              let size = this.info.blockSize * blockCount;
              let newBlocks: Uint8Array;
              if (this.source instanceof Uint8Array) {
                  // whole HCA mode
                  let start = this.info.dataOffset + this.info.blockSize * this.totalFedBlockCount;
                  let end = start + size;
                  newBlocks = this.source.subarray(start, end);
                  //} else if (this.source instanceof ReadableStreamDefaultReader) {
                  // commented out because Firefox throws "ReferenceError: ReadableStreamDefaultReader is not defined"
              } else {
                  // URL mode
                  if (this.srcBuf == null) throw new Error("srcBuf is undefined");
                  let maxDownlaodSize = this.info.blockSize * this.remainingBlockCount;
                  let downloadSize = Math.max(this.downloadBufferSize, size);
                  downloadSize = Math.min(downloadSize, maxDownlaodSize);
                  let remaining = downloadSize - this.srcBuf.length;
                  if (remaining > 0) {
                      // FIXME connection loss is not handled/recovered
                      this.srcBuf = await HCAAudioWorkletHCAPlayer.readAndAppend(this.source, this.srcBuf, remaining);
                  }
                  if (this.srcBuf.length < size) throw new Error("srcBuf still smaller than expected");
                  newBlocks = this.srcBuf.subarray(0, size);
                  this.srcBuf = this.srcBuf.slice(size);
              }
              for (let i = 0, start = 0; i < blockCount; i++, start += this.info.blockSize) {
                  let block = newBlocks.subarray(start, start + this.info.blockSize);
                  // verify checksum (if enabled)
                  // will throw & stop playing on mismatch!
                  if (this.verifyCsum) HCACrc16.verify(block, this.info.blockSize - 2);
                  // decrypt (if encrypted)
                  if (this.cipher != null) this.cipher.mask(block, 0, this.info.blockSize - 2);
                  // fix checksum
                  HCACrc16.fix(block, this.info.blockSize - 2);
              }
              if (this.hasLoop) {
                  // just copy, no need to enlarge
                  newBlocks = newBlocks.slice();
              } else {
                  // enlarge & copy
                  let data = newBlocks;
                  newBlocks = new Uint8Array(this.feedSize);
                  newBlocks.set(data);
              }
              this.totalFedBlockCount += blockCount;
              return newBlocks;
          default:
              throw new Error(`unknown cmd "${task.cmd}"`);
      }
  }

  static async create(selfUrl: URL, source: Uint8Array | URL, key1?: any, key2?: any, subkey?: any): Promise<HCAAudioWorkletHCAPlayer> {
      if (!(selfUrl instanceof URL)) throw new Error();
      if (!(source instanceof Uint8Array || source instanceof URL)) throw new Error();

      let actualSource: Uint8Array | ReadableStreamDefaultReader<Uint8Array>;
      let info: HCAInfo;
      let srcBuf: Uint8Array | undefined = undefined;
      if (source instanceof Uint8Array) {
          actualSource = source.slice(0);
          info = new HCAInfo(actualSource);
      } else if (source instanceof URL) {
          const fetched = await this.getHCAInfoFromURL(source);
          actualSource = fetched.reader;
          info = fetched.info;
          srcBuf = fetched.buffer;
      } else throw Error();
      let feedByteMax = Math.floor(this.feedByteMax);
      if (feedByteMax < info.blockSize) throw new Error();
      feedByteMax -= feedByteMax % info.blockSize;
      const feedBlockCount = feedByteMax / info.blockSize;
      // initialize cipher
      const cipher = this.getCipher(info, key1, key2, subkey);
      // create audio context
      const audioCtx = new AudioContext({
          //latencyHint: "playback", // FIXME "playback" seems to glitch if switched to background in Android
          sampleRate: info.format.samplingRate,
      });
      // create audio worklet node (not yet connected)
      await audioCtx.audioWorklet.addModule(selfUrl);
      const options: AudioWorkletNodeOptions = {
          numberOfInputs: 0,
          numberOfOutputs: 1,
          outputChannelCount: [info.format.channelCount],
          processorOptions: {
              rawHeader: info.getRawHeader(),
              pullBlockCount: feedBlockCount,
          },
      };
      const hcaPlayerNode = new AudioWorkletNode(audioCtx, "hca-frame-player", options);
      // create gain node
      const gainNode = audioCtx.createGain();
      const unlocked = await suspendAudioCtxIfUnlocked(audioCtx);
      // create controller object
      return new HCAAudioWorkletHCAPlayer(selfUrl, audioCtx, unlocked, hcaPlayerNode, gainNode, feedBlockCount,
          info, actualSource, srcBuf, cipher);
  }

  private async _terminate(): Promise<void> {
      // I didn't find terminate() for AudioWorklet so I made one
      try {
          this.hcaPlayerNode.port.close();
      } catch (e) {
          console.error(`error trying to close message port`, e);
      }
      try {
          this.hcaPlayerNode.disconnect();
      } catch (e) {
          console.error(`error trying to disconnect hcaPlayerNode`, e);
      }
      try {
          this.gainNode.disconnect();
      } catch (e) {
          console.error(`error trying to disconnect gainNode`, e);
      }
      try {
          await this.audioCtx.close();
      } catch (e) {
          console.error(`error trying to close audio context`, e);
      }
  }

  private readonly visibilityChangeListener = (): void => {
      switch (document.visibilityState) {
          case 'visible':
              if (this.requestedToPlay) {
                  this._play();
              }
              break;
          case 'hidden':
          default:
              if (!this.playInBackground) {
                  this._pause();
              }
      }
  }

  private constructor(selfUrl: URL, audioCtx: AudioContext, unlocked: boolean,
      hcaPlayerNode: AudioWorkletNode, gainNode: GainNode, feedBlockCount: number,
      info: HCAInfo, source: Uint8Array | ReadableStreamDefaultReader<Uint8Array>, srcBuf?: Uint8Array, cipher?: HCACipher) {
      this.selfUrl = selfUrl;
      this.audioCtx = audioCtx;
      this._unlocked = unlocked;
      this.taskQueue = new HCATaskQueue("Main-HCAAudioWorkletHCAPlayer",
          (msg: any, trans: Transferable[]) => hcaPlayerNode.port.postMessage(msg, trans),
          (task: HCATask) => this.taskHandler(task),
          async () => await this._terminate());
      hcaPlayerNode.port.onmessage = (ev) => this.taskQueue.msgHandler(ev);
      hcaPlayerNode.port.onmessageerror = (ev) => this.taskQueue.errHandler(ev);
      hcaPlayerNode.onprocessorerror = (ev) => this.taskQueue.errHandler(ev);
      this.hcaPlayerNode = hcaPlayerNode;
      this.gainNode = gainNode;
      this.feedBlockCount = feedBlockCount;
      this.info = info;
      this.source = source;
      this.cipher = cipher;
      this.srcBuf = srcBuf;
      this.sampleRate = info.format.samplingRate;
      this.channelCount = info.format.channelCount;
      this.hasLoop = info.hasHeader["loop"] ? true : false;

      document.addEventListener('visibilitychange', this.visibilityChangeListener);
  }

  private static getCipher(info: HCAInfo, key1?: any, key2?: any, subkey?: any): HCACipher | undefined {
      // handle subkey
      let mixed = HCACipher.mixWithSubkey(key1, key2, subkey);
      key1 = mixed.key1;
      key2 = mixed.key2;
      switch (info.cipher) {
          case 0:
              // not encrypted
              return undefined;
          case 1:
              // encrypted with "no key"
              return new HCACipher("none"); // ignore given keys
          case 0x38:
              // encrypted with keys - will yield incorrect waveform if incorrect keys are given!
              return new HCACipher(key1, key2);
          default:
              throw new Error("unknown ciph.type");
      }
  }

  private static async readAndAppend(reader: ReadableStreamDefaultReader<Uint8Array>,
      data: Uint8Array, minCount: number): Promise<Uint8Array> {
      if (minCount < 0) throw new Error();
      const desired = data.length + minCount;
      let newData = new Uint8Array(desired);
      newData.set(data);
      for (let offset = data.length; offset < desired;) {
          const res = await reader.read();
          if (res.done) throw new Error(`unexpected stream end. `
              + `it is possible that the download has been canceled (by later setSource), or the file data is incomplete`);
          const bytes = res.value;
          if (bytes.length > 0) {
              const required = offset + bytes.length;
              if (required > newData.length) {
                  const existing = newData;
                  newData = new Uint8Array(required);
                  newData.set(existing);
              }
              newData.set(bytes, offset);
              offset += bytes.length;
          }
      }
      return newData;
  }

  private static async getHCAInfoFromURL(url: URL): Promise<{
      reader: ReadableStreamDefaultReader<Uint8Array>,
      info: HCAInfo,
      buffer: Uint8Array,
  }> {
      // FIXME send HTTP Range request to avoid blocking later requests (especially in Firefox)
      const resp = await fetch(url.href);
      if (resp.status != 200) throw new Error(`status ${resp.status}`);
      if (resp.body == null) throw new Error("response has no body");
      const reader = resp.body.getReader();
      let buffer = await this.readAndAppend(reader, new Uint8Array(0), 8);
      const dataOffset = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getUint16(6);
      const remaining = dataOffset - buffer.length;
      if (remaining > 0) {
          buffer = await this.readAndAppend(reader, buffer, remaining);
      }
      return {
          reader: reader,
          info: new HCAInfo(buffer),
          buffer: buffer.slice(dataOffset),
      };
  }

  async setSource(source: Uint8Array | URL, key1?: any, key2?: any, subkey?: any): Promise<void> {
      let newInfo: HCAInfo;
      let newSource: Uint8Array | ReadableStreamDefaultReader<Uint8Array>;
      let newBuffer: Uint8Array | undefined = undefined;
      const initializeCmdItem = {
          cmd: "initialize", args: [null], hook: {
              task: async (task: HCATask) => {
                  if (!this.isAlive) throw new Error("dead");

                  const oldSource = this.source;
                  //if (oldSource instanceof ReadableStreamDefaultReader) {
                  if (oldSource != null && !(oldSource instanceof Uint8Array)) {
                      try {
                          await oldSource.cancel(); // stop downloading from previous URL
                          // FIXME Firefox doesn't seem to abort previous download
                      } catch (e) {
                          console.error(`error when cancelling previous download.`, e);
                      }
                  }

                  if (source instanceof Uint8Array) {
                      newSource = source.slice(0);
                      newInfo = new HCAInfo(newSource);
                  } else if (source instanceof URL) {
                      const result = await HCAAudioWorkletHCAPlayer.getHCAInfoFromURL(source);
                      newSource = result.reader;
                      newInfo = result.info;
                      newBuffer = result.buffer;
                  } else throw new Error("invalid source");

                  // sample rate and channel count is immutable,
                  // therefore, the only way to change them is to recreate a new instance.
                  // however, there is a memleak bug in Chromium, that:
                  // (no-longer-used) audio worklet node(s) won't be recycled:
                  // https://bugs.chromium.org/p/chromium/issues/detail?id=1298955
                  if (newInfo.format.samplingRate != this.sampleRate)
                      throw new Error("sample rate mismatch");
                  if (newInfo.format.channelCount != this.channelCount)
                      throw new Error("channel count mismatch");

                  await this._resume(); // resume it, so that cmd can then be executed

                  const newProcOpts = {
                      rawHeader: newInfo.getRawHeader(),
                      pullBlockCount: this.feedBlockCount,
                  };
                  return new HCATask(task.origin, task.taskID, task.cmd, [newProcOpts], false);
              }, result: async () => {
                  await this._suspend(); // initialized, but it's paused, until being requested to start/play (resume)
                  this.totalFedBlockCount = 0;
                  this.cipher = HCAAudioWorkletHCAPlayer.getCipher(newInfo, key1, key2, subkey);
                  this.info = newInfo;
                  this.source = newSource;
                  this.srcBuf = newBuffer;
                  this.hasLoop = newInfo.hasHeader["loop"] ? true : false;
                  this._initialized = true; // again we now have something to play
              }
          }
      }
      await this.taskQueue.execMultiCmd([this.stopCmdItem, initializeCmdItem]); // ensure atomicity
  }

  // not supposed to be used directly
  private async _resume(): Promise<void> {
      if (!this.isAlive) throw new Error("dead");
      if (this.isPlaying) return;
      await this.audioCtx.resume();
      this.hcaPlayerNode.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);
      this.isPlaying = true;
      // mark as unlocked
      if (!this._unlocked) {
          this._unlocked = true;
          console.warn(`audio context for sampleRate=${this.audioCtx.sampleRate} is now resumed/unlocked`);
      }
  }
  private async _suspend(): Promise<void> {
      if (!this.isAlive) throw new Error("dead");
      if (!this.isPlaying) return;
      this.hcaPlayerNode.disconnect();
      this.gainNode.disconnect();
      await this.audioCtx.suspend();
      this.isPlaying = false;
  }
  private async _pause(): Promise<void> {
      await this.setPlaying(false);
  }
  private async _play(): Promise<void> {
      // in apple webkit, audio context is suspended/locked initially,
      // (other browsers like Firefox may have similar but less strict restrictions)
      // to resume/unlock it, first resume() call must be triggered by from UI event,
      // which must not be after await
      await this.setPlaying(true);
  }
  private readonly stopCmdItem = {
      // exec "reset" cmd first, in order to avoid "residue" burst noise to be played in the future (observed in Chrome)
      cmd: "reset", args: [], hook: {
          task: async (task: HCATask) => {
              if (!this.isAlive) throw new Error("dead");
              if (!this.isPlaying) await this._resume();
              return task;
          },
          result: async () => {
              await this._suspend(); // can now suspend
              this._initialized = false; // now we have nothing to play until next setSource
              if (this.source != null && !(this.source instanceof Uint8Array)) {
                  await this.source.cancel();
                  delete this.source;
              }
          },
      }
  }

  // wraped to ensure atomicity
  private async setPlaying(toPlay: boolean): Promise<void> {
      // simlilar to stopCmdItem above, send "pause" cmd to avoid "residue" burst noise
      await this.taskQueue.execCmd(toPlay ? "resume" : "pause", [], {
          task: async (task: HCATask) => {
              if (!this.isAlive) throw new Error("dead");
              if (this.isPlaying) {
                  if (toPlay) task.isDummy = true; // already resumed, not sending cmd
                  // else should still keep playing until "pause" cmd returns
              } else {
                  if (toPlay) {
                      if (!this._initialized) throw new Error(`not initialized but still attempt to resume`);
                      await this._resume();
                  }
                  else task.isDummy = true; // already paused, not sending cmd
              }
              return task;
          },
          result: async () => {
              if (toPlay) await this._resume();
              else await this._suspend();
          }
      });
  }
  async pause(): Promise<void> {
      this.requestedToPlay = false;
      await this._pause();
  }
  async play(): Promise<void> {
      this.requestedToPlay = true;
      await this._play();
  }
  async stop(): Promise<void> {
      // can unlock the locked audio context as well because it's resumed firstly before finally suspended
      this.requestedToPlay = false;
      const item = this.stopCmdItem;
      await this.taskQueue.execCmd(item.cmd, item.args, item.hook);
  }

  async shutdown(forcibly = false): Promise<void> {
      if (!this.isAlive) {
          console.error(`already shutdown`);
          return;
      }

      try {
          document.removeEventListener('visibilitychange', this.visibilityChangeListener);
      } catch (e) {
          console.error(e);
      }

      await this.taskQueue.shutdown(forcibly);
  }
}

// create & control worker
class HCAWorker {
  get isAlive(): boolean {
    return this.taskQueue.isAlive;
  }
  private readonly selfUrl: URL;
  private readonly taskQueue: HCATaskQueue;
  private hcaWorker: Worker;
  /*private*/ awHcaPlayer?: HCAAudioWorkletHCAPlayer; // FIXME should be private
  private lastTick = 0;
  async shutdown(forcibly = false): Promise<void> {
    if (this.taskQueue.isAlive) await this.taskQueue.shutdown(forcibly);
    if (this.awHcaPlayer != null && this.awHcaPlayer.isAlive) await this.awHcaPlayer.shutdown(forcibly);
  }
  async tick(): Promise<void> {
    await this.taskQueue.execCmd("nop", []);
    this.lastTick = new Date().getTime();
  }
  async tock(text = ""): Promise<number> {
    await this.taskQueue.execCmd("nop", []);
    const duration = new Date().getTime() - this.lastTick;
    console.log(`${text} took ${duration} ms`);
    return duration;
  }
  static async create(selfUrl: URL | string): Promise<HCAWorker> {
    if (typeof selfUrl === "string") {
      selfUrl = new URL(selfUrl, document.baseURI);
    } else if (!(selfUrl instanceof URL)) {
      throw new Error("selfUrl must be either string or URL");
    }
    // fetch & save hca.js as blob in advance, to avoid creating worker being blocked later, like:
    // (I observed this problem in Firefox)
    // creating HCAAudioWorkletHCAPlayer requires information from HCA, which is sample rate and channel count;
    // however, fetching HCA (originally supposed to be progressive/streamed) blocks later request to fetch hca.js,
    // so that HCAAudioWorkletHCAPlayer can only be created after finishing downloading the whole HCA,
    // which obviously defeats the purpose of streaming HCA
    const response = await fetch(selfUrl.href);
    // Firefox currently does not support ECMAScript modules in Worker,
    // therefore we must strip all export declarations
    const origText = await response.text();
    const convertedText = ("\n" + origText).replace(
      /\bexport\s+{.*?};?/,
      "",
    ).slice(1);
    const blob = new Blob([convertedText], { type: "text/javascript" });
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    const dataURI = await new Promise((res: (result: string) => void) => {
      reader.onloadend = function () {
        res(reader.result as string);
      };
    });
    selfUrl = new URL(dataURI, document.baseURI);
    return new HCAWorker(selfUrl);
  }
  private constructor(selfUrl: URL, selfBlob?: Blob) {
    this.hcaWorker = new Worker(selfUrl, { type: "module" }); // setting type to "module" is currently bogus in Firefox
    try {
        this.hcaWorker = new Worker(selfUrl, { type: "module" }); // setting type to "module" is currently bogus in Firefox
    } catch (e) {
        // workaround for legacy iOS Safari
        if (selfBlob == null || !(selfBlob instanceof Blob)) throw e;
        const objUrl = URL.createObjectURL(selfBlob);
        this.hcaWorker = new Worker(objUrl, { type: "module" });
        URL.revokeObjectURL(objUrl);
    }
    this.selfUrl = selfUrl;
    this.taskQueue = new HCATaskQueue(
      "Main-HCAWorker",
      (msg: any, trans: Transferable[]) =>
        this.hcaWorker.postMessage(msg, trans),
      async (task) => {
        switch (task.cmd) {
          case "self-destruct": // doesn't seem to have a chance to be called
            console.error(`hcaWorker requested to self-destruct`);
            await this.taskQueue.shutdown(true);
            break;
        }
      },
      () => this.hcaWorker.terminate(),
    );
    this.hcaWorker.onmessage = (msg) => this.taskQueue.msgHandler(msg);
    this.hcaWorker.onerror = (msg) => this.taskQueue.errHandler(msg);
    this.hcaWorker.onmessageerror = (msg) => this.taskQueue.errHandler(msg);
  }
  // commands
  async getTransferConfig(): Promise<
    { transferArgs: boolean; replyArgs: boolean }
  > {
    return await this.taskQueue.getTransferConfig();
  }
  async configTransfer(
    transferArgs: boolean,
    replyArgs: boolean,
  ): Promise<void> {
    return await this.taskQueue.configTransfer(transferArgs, replyArgs);
  }
  async fixHeaderChecksum(hca: Uint8Array): Promise<Uint8Array> {
    return await this.taskQueue.execCmd("fixHeaderChecksum", [hca]);
  }
  async fixChecksum(hca: Uint8Array): Promise<Uint8Array> {
    return await this.taskQueue.execCmd("fixChecksum", [hca]);
  }
  async findKey(hca: Uint8Array, givenKeyList?: [any, any][], subkey?: any, threshold = 0.5, depth = 1024): Promise<[number, number] | undefined> {
    return await this.taskQueue.execCmd("findKey", [hca, givenKeyList, subkey, threshold, depth]);
  }
  async decrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Promise<Uint8Array> {
      return await this.taskQueue.execCmd("decrypt", [hca, key1, key2, subkey]);
  }
  async encrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Promise<Uint8Array> {
      return await this.taskQueue.execCmd("encrypt", [hca, key1, key2, subkey]);
  }
  async addHeader(
    hca: Uint8Array,
    sig: string,
    newData: Uint8Array,
  ): Promise<Uint8Array> {
    return await this.taskQueue.execCmd("addHeader", [hca, sig, newData]);
  }
  async addCipherHeader(
    hca: Uint8Array,
    cipherType?: number,
  ): Promise<Uint8Array> {
    return await this.taskQueue.execCmd("addCipherHeader", [hca, cipherType]);
  }
  async decode(
    hca: Uint8Array,
    mode = 32,
    loop = 0,
    volume = 1.0,
  ): Promise<Uint8Array> {
    return await this.taskQueue.execCmd("decode", [hca, mode, loop, volume]);
  }
  async loadHCAForPlaying(hca: URL | string | Uint8Array, key1?: any, key2?: any, subkey?: any): Promise<void> {
    if (typeof hca === "string") {
        if (hca === "") throw new Error("empty URL");
        hca = new URL(hca, document.baseURI);
    } else if (!(hca instanceof URL) && !(hca instanceof Uint8Array))
        throw new Error("hca must be either URL or Uint8Array");
    if (this.awHcaPlayer == null) {
        this.awHcaPlayer = await HCAAudioWorkletHCAPlayer.create(this.selfUrl, hca, key1, key2, subkey);
    } else {
        try {
            await this.awHcaPlayer.setSource(hca, key1, key2, subkey);
        } catch (e) {
            console.error(`awHcaPlayer.setSource failed, attempt recreate player instance`, e);
            // FIXME memleak
            this.awHcaPlayer = await HCAAudioWorkletHCAPlayer.create(this.selfUrl, hca, key1, key2, subkey);
        }
    }
  }
  async pausePlaying(): Promise<void> {
      if (this.awHcaPlayer == null) throw new Error();
      await this.awHcaPlayer.pause();
  }
  async resumePlaying(): Promise<void> {
      if (this.awHcaPlayer == null) throw new Error();
      await this.awHcaPlayer.play();
  }
  async stopPlaying(): Promise<void> {
      if (this.awHcaPlayer == null) throw new Error();
      await this.awHcaPlayer.stop();
  }
}

export default HCAWorker;
