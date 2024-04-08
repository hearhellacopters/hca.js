import HCA from "../HCA";
import HCAFrame from "../VGAudio/Codecs/CriHca/CriHcaFrame";
import HCAInfo from "../VGAudio/Codecs/CriHca/HcaInfo";
import type HCATask from "./HCATask";
import HCATaskQueue from "./HCATaskQueue";

interface HCAFramePlayerProcessorOptions {
  rawHeader: Uint8Array,
  pullBlockCount?: number,
}

// Web Worker / AudioWorklet support
if (typeof document === "undefined") {
  if (typeof onmessage === "undefined") {
    class HCAFramePlayerContext {
      isPlaying = false;

      readonly defaultPullBlockCount = 128;
      pullBlockCount: number;

      frame: HCAFrame;

      failedBlocks: Array<number> = [];
      lastError?: any;
      readonly printErrorCountDownFrom = 256;
      printErrorCountDown = this.printErrorCountDownFrom;

      // if loop header exists, all blocks (up to loop end) are stored in encoded buffer,
      // otherwise, only 2 * pullBlockCount blocks are stored in encoded buffer
      encoded: Uint8Array;
      totalPulledBlockCount = 0;
      isPulling = false;
      get isStalling(): boolean {
          return this._isStalling;
      }
      set isStalling(val: boolean) {
          this._isStalling = val;
          if (val) this.onceStalled = true;
      }
      private _isStalling = false;
      onceStalled = false;

      // two blocks are stored in decoded buffer
      decoded: Float32Array[];
      sampleOffset = 0;
      lastDecodedBlockIndex = -1;

      constructor(procOpts: HCAFramePlayerProcessorOptions) {
          this.frame = new HCAFrame(new HCAInfo(procOpts.rawHeader));
          const info = this.frame.Hca;
          const hasLoop = info.hasHeader["loop"] ? true : false;

          if (typeof procOpts.pullBlockCount === "number") {
              if (isNaN(procOpts.pullBlockCount)) throw new Error();
              let pullBlockCount = Math.floor(procOpts.pullBlockCount);
              if (pullBlockCount < 2) throw new Error();
              this.pullBlockCount = pullBlockCount;
          } else this.pullBlockCount = this.defaultPullBlockCount;
          const bufferedBlockCount = hasLoop ? (info.loop.end + 1) : this.pullBlockCount * 2;
          this.encoded = new Uint8Array(info.blockSize * bufferedBlockCount);
          this.decoded = Array.from(
              { length: info.format.channelCount },
              () => new Float32Array(HCAFrame.SamplesPerFrame * 2)
          );
      }
  }
  class HCAFramePlayer extends AudioWorkletProcessor {
      private ctx?: HCAFramePlayerContext;

      private unsettled: { resolve: (result?: any) => void, counter: number }[] = [];
      private readonly waitCountDownFrom = 32;

      private readonly taskQueue: HCATaskQueue;

      constructor(options: AudioWorkletNodeOptions | undefined) {
          super();

          if (options == null || options.processorOptions == null) throw new Error();
          this.ctx = new HCAFramePlayerContext(options.processorOptions);

          this.taskQueue = new HCATaskQueue("Background-HCAFramePlayer",
              (msg: any, trans: Transferable[]) => this.port.postMessage(msg, trans),
              async (task: HCATask) => {
                  switch (task.cmd) {
                      case "nop":
                          return;
                      case "initialize":
                          this.ctx = new HCAFramePlayerContext(task.args[0]);
                          break;
                      case "reset":
                          await new Promise((resolve) => {
                              delete this.ctx;
                              this.unsettled.push({ resolve: resolve, counter: this.waitCountDownFrom });
                          });
                          break;
                      case "pause":
                      case "resume":
                          if (this.ctx == null) throw new Error(`not initialized`);
                          this.ctx.isPlaying = task.cmd === "resume";
                          if (!this.ctx.isPlaying) await new Promise((resolve) => {
                              this.unsettled.push({ resolve: resolve, counter: this.waitCountDownFrom });
                          });
                          break;
                      default:
                          throw new Error(`unknown cmd ${task.cmd}`);
                  }
              },
              () => { this.taskQueue.sendCmd("self-destruct", []); }
          );
          this.taskQueue.configTransfer(true, false);
          this.port.onmessage = (ev: MessageEvent) => this.taskQueue.msgHandler(ev);
      }

      private handleNewBlocks(ctx: HCAFramePlayerContext, newBlocks: Uint8Array): void {
          const info = ctx.frame.Hca;
          const hasLoop = info.hasHeader["loop"] ? true : false;
          const pullBlockCount = ctx.pullBlockCount;
          const encoded = ctx.encoded;
          if (newBlocks.length % info.blockSize != 0) {
              throw new Error(`newBlocks.length=${newBlocks.length} should be multiple of blockSize`);
          }
          const newBlockCount = newBlocks.length / info.blockSize;
          const expected = info.blockSize * pullBlockCount;
          if (hasLoop) {
              let encodedOffset = info.blockSize * ctx.totalPulledBlockCount;
              if (encodedOffset + newBlocks.length > encoded.length) {
                  throw new Error(`has loop header, buffer will overflow`);
              }
              encoded.set(newBlocks, encodedOffset);
          } else {
              if (newBlocks.length != expected) {
                  throw new Error(`no loop header, newBlocks.length (${newBlocks.length}) != expected (${expected})`);
              }
              switch (ctx.totalPulledBlockCount % (pullBlockCount * 2)) {
                  case 0:
                      encoded.set(newBlocks);
                      break;
                  case pullBlockCount:
                      encoded.set(newBlocks, expected);
                      break;
                  default:
                      throw new Error();
              }
          }
          ctx.totalPulledBlockCount += newBlockCount;
          ctx.isPulling = false;
      }

      private pullNewBlocks(ctx: HCAFramePlayerContext): void {
          // if ctx passed in had been actually deleted, it won't affect the current using ctx
          if (ctx.isPulling) return; // already pulling. will be called again if still not enough
          ctx.isPulling = true;
          // request to pull & continue decoding
          this.taskQueue.execCmd("pull", [], {
              result: (newBlocks: Uint8Array) => this.handleNewBlocks(ctx, newBlocks),
              error: () => { ctx.isPulling = false; },
          })
              .catch((e) => {
                  console.warn(`pullNewBlocks failed.`, e);
              });
      }

      private writeToDecodedBuffer(frame: HCAFrame, decoded: Float32Array[]): void {
          const halfSize = HCAFrame.SamplesPerFrame;
          for (let c = 0; c < frame.Channels.length; c++) {
              const firstHalf = decoded[c].subarray(0, halfSize);
              const lastHalf = decoded[c].subarray(halfSize, halfSize * 2);
              firstHalf.set(lastHalf);
              for (let sf = 0, offset = 0; sf < HCAFrame.SubframesPerFrame; sf++) {
                  lastHalf.set(frame.Channels[c].PcmFloat[sf], offset);
                  offset += HCAFrame.SamplesPerSubFrame;
              }
              for (let i = 0; i < lastHalf.length; i++) {
                  if (lastHalf[i] > 1) lastHalf[i] = 1;
                  else if (lastHalf[i] < -1) lastHalf[i] = -1;
              }
          }
      }

      private mapToUnLooped(info: HCAInfo, sampleOffset: number): number {
          const hasLoop = info.hasHeader["loop"] ? true : false;
          if (sampleOffset <= info.endAtSample) {
              return sampleOffset;
          } else {
              if (hasLoop) {
                  let offset = (sampleOffset - info.loopStartAtSample) % info.loopSampleCount;
                  return info.loopStartAtSample + offset;
              } else {
                  return info.endAtSample;
              }
          }
      }

      process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: AudioWorkletNodeOptions) {
          if (this.ctx == null || !this.ctx.isPlaying) {
              // workaround the "residue" burst noise issue in Chrome
              const unsettled = this.unsettled.shift();
              if (unsettled != null) {
                  if (--unsettled.counter > 0) this.unsettled.unshift(unsettled);
                  else try {
                      unsettled.resolve();
                  } catch (e) {
                      console.error(`error when settling promise of "reset" or "setPlaying" cmd`);
                  }
              }
              return true; // wait for new source or resume
          }

          if (this.ctx.failedBlocks.length > 0) {
              if (this.ctx.failedBlocks.length >= 64 || --this.ctx.printErrorCountDown <= 0) {
                  console.error(`error decoding following blocks`, this.ctx.failedBlocks, this.ctx.lastError);
                  this.ctx.failedBlocks = []; this.ctx.lastError = undefined;
                  this.ctx.printErrorCountDown = this.ctx.printErrorCountDownFrom;
              }
          }

          const output = outputs[0];
          const renderQuantumSize = output[0].length;
          const samplesPerBlock = HCAFrame.SamplesPerFrame;
          // no more than one block will be decoded each time this function being called,
          // therefore one block must cover the whole renderQuantumSize
          if (samplesPerBlock < renderQuantumSize)
              throw new Error("render quantum requires more sample than a full block");
          const info = this.ctx.frame.Hca;
          const hasLoop = info.hasHeader["loop"] ? true : false;
          const encoded = this.ctx.encoded;
          const decoded = this.ctx.decoded;
          // skip droppedHeader
          if (this.ctx.sampleOffset < info.format.droppedHeader) {
              this.ctx.sampleOffset = info.format.droppedHeader;
          }
          if (this.ctx.sampleOffset >= info.endAtSample) {
              if (hasLoop) {
                  // rewind back if beyond loop end
                  this.ctx.sampleOffset = this.mapToUnLooped(info, this.ctx.sampleOffset);
              } else {
                  // nothing more to play
                  this.taskQueue.sendCmd("end", []); // not waiting for result
                  delete this.ctx; // avoid sending "end" cmd for more than one time
                  return true;
              }
          }
          // decode block & pull new block (if needed)
          const mappedStartOffset = this.mapToUnLooped(info, this.ctx.sampleOffset);
          const mappedEndOffset = this.mapToUnLooped(info, this.ctx.sampleOffset + renderQuantumSize);
          const inBlockStartOffset = mappedStartOffset % samplesPerBlock;
          const inBlockEndOffset = mappedEndOffset % samplesPerBlock;
          const startBlockIndex = (mappedStartOffset - inBlockStartOffset) / samplesPerBlock;
          const endBlockIndex = (mappedEndOffset - inBlockEndOffset) / samplesPerBlock;
          if (endBlockIndex != this.ctx.lastDecodedBlockIndex) {
              if (endBlockIndex < this.ctx.totalPulledBlockCount) {
                  // block is available for decoding
                  this.ctx.isStalling = false;
                  let start = info.blockSize * (hasLoop
                      ? endBlockIndex
                      : endBlockIndex % (this.ctx.pullBlockCount * 2));
                  let end = start + info.blockSize;
                  if (end > encoded.length) throw new Error("block end offset exceeds buffer size");
                  try {
                      HCA.decodeBlock(this.ctx.frame, encoded.subarray(start, end));
                  } catch (e) {
                      this.ctx.failedBlocks.push(endBlockIndex);
                      this.ctx.lastError = e;
                      this.ctx.frame.Channels.forEach((c) => { c.PcmFloat.forEach((sf) => sf.fill(0)) });
                  }
                  this.writeToDecodedBuffer(this.ctx.frame, this.ctx.decoded);
                  this.ctx.lastDecodedBlockIndex = endBlockIndex;
                  if (this.ctx.totalPulledBlockCount < (hasLoop ? info.loop.end : info.format.blockCount)) {
                      // pull blocks in advance
                      let availableBlockCount = hasLoop && this.ctx.totalPulledBlockCount >= info.loop.end + 1
                          ? "all_pulled"
                          : this.ctx.totalPulledBlockCount - (this.ctx.lastDecodedBlockIndex + 1);
                      if (typeof availableBlockCount === 'number' && availableBlockCount < this.ctx.pullBlockCount) {
                          this.pullNewBlocks(this.ctx);
                      }
                  }
              } else {
                  // block is unavailable
                  if (!this.ctx.isStalling && this.ctx.onceStalled) {
                      // print error about stalling
                      console.warn(`[HCAFramePlayer] waiting until block ${endBlockIndex} become available...`);
                  }
                  this.ctx.isStalling = true;
                  this.pullNewBlocks(this.ctx);
                  return true;
              }
          }
          // copy decoded data
          if (output.length != info.format.channelCount) throw new Error("channel count mismatch");
          const inBufferStartOffset = (endBlockIndex != startBlockIndex ? 0 : samplesPerBlock) + inBlockStartOffset;
          const inBufferEndOffset = samplesPerBlock + inBlockEndOffset;
          const inBufferSrcSize = inBufferEndOffset - inBufferStartOffset;
          if (inBufferSrcSize <= 0) throw new Error("size in decoded buffer should be positive");
          const copySize = Math.min(inBufferSrcSize, renderQuantumSize);
          for (let channel = 0; channel < output.length; channel++) {
              let src = decoded[channel].subarray(inBufferStartOffset, inBufferStartOffset + copySize);
              output[channel].set(src);
          }
          this.ctx.sampleOffset += copySize;
          return true;
      }
  }
  registerProcessor("hca-frame-player", HCAFramePlayer);
  } else {
    // Web Worker
    const taskQueue = new HCATaskQueue(
      "Background-HCAWorker",
      (msg: any, trans: Transferable[]) => postMessage(msg, trans),
      (task: HCATask) => {
        switch (task.cmd) {
          case "nop":
            return;
          case "fixHeaderChecksum":
            return HCAInfo.fixHeaderChecksum.apply(HCAInfo, task.args);
          case "fixChecksum":
            return HCA.fixChecksum.apply(HCA, task.args);
          case "findKey":
            return HCA.findKey.apply(HCA, task.args);
          case "decrypt":
            return HCA.decrypt.apply(HCA, task.args);
          case "encrypt":
            return HCA.encrypt.apply(HCA, task.args);
          case "addCipherHeader":
            return HCAInfo.addCipherHeader.apply(HCAInfo, task.args);
          case "decode":
            return HCA.decode.apply(HCA, task.args);
          default:
            throw new Error(`unknown cmd ${task.cmd}`);
        }
      },
      () => {
        taskQueue.sendCmd("self-destruct", []);
      },
    );
    onmessage = (ev: MessageEvent) => taskQueue.msgHandler(ev);
  }
}
