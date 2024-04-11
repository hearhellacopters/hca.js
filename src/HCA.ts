import HCACipher, {HCAKnownKeys} from "./HCACipher";
import {
  SamplesPerFrame,
  SamplesPerSubFrame,
  SubframesPerFrame,
} from "./VGAudio/Codecs/CriHca/CriHcaConstants";
import HCADecoder from "./VGAudio/Codecs/CriHca/CriHcaDecoder";
import HCAFrame from "./VGAudio/Codecs/CriHca/CriHcaFrame";
import HCAInfo from "./VGAudio/Codecs/CriHca/HcaInfo";
import HCACrc16 from "./VGAudio/Utilities/Crc16";
import HCAWav from "./wav/HCAWav";
import HCAPacking from "./VGAudio/Codecs/CriHca/CriHcaPacking";
import HCABitReader from './VGAudio/Utilities/BitReader';
import HCAParameters from "./VGAudio/Codecs/CriHca/CriHcaParameters";
import HCAWriter from "./VGAudio/Containers/Hca/HcaWriter";
import wavReader from "./wav/wavReader";
import HCAFormat from "./VGAudio/Formats/CriHca/CriHcaFormat";
class HCA {
  constructor() {
  }

  static decrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Uint8Array {
    return this.decryptOrEncrypt(hca, false, key1, key2, subkey);
  }
  static encrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Uint8Array {
    return this.decryptOrEncrypt(hca, true, key1, key2, subkey);
  }
  static decryptOrEncrypt(
    hca: Uint8Array,
    encrypt: boolean,
    key1?: any,
    key2?: any, 
    subkey?: any): Uint8Array {
    // in-place decryption/encryption
    // handle subkey
    let mixed = HCACipher.mixWithSubkey(key1, key2, subkey);
    key1 = mixed.key1;
    key2 = mixed.key2;
    // parse header
    let info = new HCAInfo(hca); // throws "Not a HCA file" if mismatch
    if (!encrypt && !info.hasHeader["ciph"]) {
      return hca; // not encrypted
    } else if (encrypt && !info.hasHeader["ciph"]) {
      throw new Error(
        'Input hca lacks "ciph" header section. Please call HCAInfo.addCipherHeader(hca) first.',
      );
    }
    let cipher: HCACipher;
    switch (info.cipher) {
      case 0:
        // not encrypted
        if (encrypt) cipher = new HCACipher(key1, key2).invertTable();
        else return hca;
        break;
      case 1:
        // encrypted with "no key"
        if (encrypt) {
          throw new Error(
            'already encrypted with "no key", please decrypt first',
          );
        } else cipher = new HCACipher("none"); // ignore given keys
        break;
      case 0x38:
        // encrypted with keys - will yield incorrect waveform if incorrect keys are given!
        if (encrypt) {
          throw new Error(
            "already encrypted with specific keys, please decrypt with correct keys first",
          );
        } else cipher = new HCACipher(key1, key2);
        break;
      default:
        throw new Error("unknown ciph.type");
    }
    for (let i = 0; i < info.format.blockCount; ++i) {
      let ftell = info.dataOffset + info.blockSize * i;
      let block = hca.subarray(ftell, ftell + info.blockSize);
      // verify block checksum
      HCACrc16.verify(block, info.blockSize - 2);
      // decrypt/encrypt block
      cipher.mask(block, 0, info.blockSize - 2);
      // fix checksum
      HCACrc16.fix(block, info.blockSize - 2);
    }
    // re-(un)mask headers, and set ciph header to new value
    let newCipherData = new Uint8Array(2);
    let newCipherType = encrypt ? cipher.getType() : 0;
    new DataView(newCipherData.buffer).setUint16(0, newCipherType);
    info.modify(hca, "ciph", newCipherData);
    return hca;
  }
  static findKey(
    hca: Uint8Array, givenKeyList?: [any, any][], subkey?: any, threshold = 0.5, depth = 1024
  ): [number, number] | undefined {
      let keyList: [number, number][], unmixedKeyList: [number, number][];
      if (givenKeyList == null) {
          keyList = HCAKnownKeys;
      } else {
          keyList = givenKeyList.map((keys) => [HCACipher.parseKey(keys[0]), HCACipher.parseKey(keys[1])]);
          HCAKnownKeys.forEach((keys) => keyList?.push(keys));
      }
      unmixedKeyList = keyList.slice();

      if (subkey != null) {
          // handle subkey
          keyList = keyList.map((keys) => {
              let mixed = HCACipher.mixWithSubkey(keys[0], keys[1], subkey);
              return [mixed.key1, mixed.key2];
          });
      }

      // parse header
      const info = new HCAInfo(hca); // throws "Not a HCA file" if mismatch

      if (info.cipher == 0) return; // not encrypted

      const frame = new HCAFrame(info);

      const scores = keyList.map(() => 0);

      let cipher: HCACipher | undefined;
      const testKey = (block: Uint8Array, keys: [number, number]): boolean => {
          if (cipher == null) cipher = new HCACipher(keys[0], keys[1]);
          // decrypt block
          block = block.slice();
          cipher.mask(block, 0, info.blockSize - 2);
          // test if the key is correct
          let reader = new HCABitReader(block);
          let result = false;
          try {
              result = HCAPacking.UnpackFrame(frame, reader);
          } catch (e) { }
          if (!result) {
              cipher = undefined;
          }
          return result;
      }
      let testedBlockCount = 0;
      for (let i = 0, lastFound = -1; i < info.format.blockCount && i < depth; i++) {
          let ftell = info.dataOffset + info.blockSize * i;
          let block = hca.subarray(ftell, ftell + info.blockSize);

          let found = -1;
          if (lastFound != -1) {
              // test last found key
              if (testKey(block, keyList[lastFound])) found = lastFound;
          }
          if (found == -1) {
              // last found key does not match, test others
              found = keyList.findIndex((keys, index) => index == lastFound ? false : testKey(block, keys));
          }
          if (found != -1) {
              lastFound = found;
              scores[found]++;
          }

          testedBlockCount++;
      }
      let bestScore = 0, bestIndex = -1;
      scores.forEach((s, i) => s > bestScore && (bestScore = s, bestIndex = i));

      if (bestIndex == -1 || bestScore / testedBlockCount < threshold) return; // cannot found valid key
      else return unmixedKeyList[bestIndex];
  }
  static encode(wav: Uint8Array, key1?: number, key2?: number, subkey?: number){
    //source
    //VGAAudio/Formats/CriHca/CriHcaFormat.cs
    //https://github.com/Thealexbarney/VGAudio/blob/master/src/VGAudio/Formats/CriHca/CriHcaFormat.cs
    const pcm16 = new wavReader(wav);
    if(pcm16.wFormatTag != 1){
      throw new Error("Can only create HCA from PCM16 wav");
    }
    const config = new HCAParameters(
      pcm16.ChannelCount,
      pcm16.SampleRate,
      pcm16.SampleCount,
      pcm16.LoopStart,
      pcm16.LoopEnd
    )
    const format = HCAFormat.EncodeFromPcm16(pcm16, config);
    const hca = new HCAWriter(key1,key2,subkey).SetupWriter(format);
    if(key1 != undefined){
      return this.encrypt(hca,key1,key2,subkey);
    }
    return hca;
  }
  static decode(hca: Uint8Array, mode = 32, loop = 0, volume = 1.0) {
    switch (mode) {
      case 0: // float
      case 8:
      case 16:
      case 24:
      case 32: // integer
        break;
      default:
        mode = 32;
    }
    if (volume > 1) volume = 1;
    else if (volume < 0) volume = 0;

    let info = new HCAInfo(hca); // throws "Not a HCA file" if mismatch
    let frame = new HCAFrame(info);

    if (info.hasHeader["ciph"] && info.cipher != 0) {
      throw new Error(
        "HCA is encrypted, please decrypt it first before decoding",
      );
    }

    // prepare output WAV file
    const outputWav = new HCAWav(info, mode, loop);
    const fileBuf = outputWav.fileBuf;
    const dataPart = outputWav.dataPart;

    // calculate in-WAV size
    let inWavSize = info.calcInWavSize(mode);

    // decode blocks (frames)
    let failedBlocks = [], lastError = undefined;
    for (let i = 0, offset = 0; i < info.format.blockCount; i++) {
      let lastDecodedSamples = i * SamplesPerFrame;
      let currentDecodedSamples = lastDecodedSamples + SamplesPerFrame;
      if (
        currentDecodedSamples <= info.startAtSample ||
        lastDecodedSamples >= info.endAtSample
      ) {
        continue;
      }
      let startOffset = info.dataOffset + info.blockSize * i;
      let block = hca.subarray(startOffset, startOffset + info.blockSize);
      try {
          this.decodeBlock(frame, block);
      } catch (e) {
          failedBlocks.push(i);
          lastError = e;
          frame = new HCAFrame(info);
      }
      let wavebuff: Uint8Array;
      if (
        lastDecodedSamples < info.startAtSample ||
        currentDecodedSamples > info.endAtSample
      ) {
        // crossing startAtSample/endAtSample, skip/drop specified bytes
        wavebuff = this.writeToPCM(frame, mode, volume);
        if (lastDecodedSamples < info.startAtSample) {
          let skippedSize = (info.startAtSample - lastDecodedSamples) *
            inWavSize.sample;
          wavebuff = wavebuff.subarray(skippedSize, inWavSize.block);
        } else if (currentDecodedSamples > info.endAtSample) {
          let writeSize = (info.endAtSample - lastDecodedSamples) *
            inWavSize.sample;
          wavebuff = wavebuff.subarray(0, writeSize);
        } else throw Error("should never go here");
        dataPart.set(wavebuff, offset);
      } else {
        wavebuff = this.writeToPCM(frame, mode, volume, dataPart, offset);
      }
      offset += wavebuff.byteLength;
    }
    if (failedBlocks.length > 0) {
        console.error(`error decoding following blocks, filled zero`, failedBlocks, lastError);
    }

    // decoding done, then just copy looping part
    if (info.hasHeader["loop"] && loop) {
      // "tail" beyond loop end is dropped
      // copy looping audio clips
      if (inWavSize.loop == null) throw new Error();
      let preLoopSizeInWav = inWavSize.sample *
        (info.loopStartAtSample - info.startAtSample);
      let src = dataPart.subarray(
        preLoopSizeInWav,
        preLoopSizeInWav + inWavSize.loop.loopPart,
      );
      for (
        let i = 0, start = preLoopSizeInWav + inWavSize.loop.loopPart;
        i < loop;
        i++
      ) {
        let dst = dataPart.subarray(start, start + inWavSize.loop.loopPart);
        dst.set(src);
        start += inWavSize.loop.loopPart;
      }
    }

    return fileBuf;
  }

  static decodeBlock(frame: HCAFrame, block: Uint8Array): void {
    let info = frame.Hca;
    if (block.byteLength != info.blockSize) throw new Error();
    // verify checksum
    HCACrc16.verify(block, info.blockSize - 2);
    // decode
    HCADecoder.DecodeFrame(block, frame);
  }
  static writeToPCM(
    frame: HCAFrame,
    mode = 32,
    volume = 1.0,
    writer?: Uint8Array,
    ftell?: number,
  ): Uint8Array {
    switch (mode) {
      case 0: // float
      case 8:
      case 16:
      case 24:
      case 32: // integer
        break;
      default:
        mode = 32;
    }
    if (volume > 1) volume = 1;
    else if (volume < 0) volume = 0;
    // create new writer if not specified
    let info = frame.Hca;
    if (writer == null) {
      writer = new Uint8Array(
        SamplesPerFrame * info.format.channelCount *
          (mode == 0 ? 32 : mode) / 8,
      );
      if (ftell == null) {
        ftell = 0;
      }
    } else {
      if (ftell == null) throw new Error();
    }
    // write decoded data into writer
    let p = new DataView(writer.buffer, writer.byteOffset, writer.byteLength);
    let ftellBegin = ftell;
    for (let sf = 0; sf < SubframesPerFrame; sf++) {
      for (let s = 0; s < SamplesPerSubFrame; s++) {
        for (let c = 0; c < frame.Channels.length; c++) {
          let f = frame.Channels[c].PcmFloat[sf][s] * volume;
          if (f > 1) f = 1;
          else if (f < -1) f = -1;
          switch (mode) {
            case 8:
              // must be unsigned
              p.setUint8(ftell, f * 0x7F + 0x80);
              ftell += 1;
              break;
            case 16:
              // for above 8-bit integer, little-endian signed integer is used
              // (setUint16/setInt16 actually doesn't seem to make any difference here)
              p.setInt16(ftell, f * 0x7FFF, true);
              ftell += 2;
              break;
            case 24:
              // there's no setInt24, write 3 bytes with setUint8 respectively
              f *= 0x7FFFFF;
              p.setUint8(ftell, f & 0xFF);
              p.setUint8(ftell + 1, f >> 8 & 0xFF);
              p.setUint8(ftell + 2, f >> 16 & 0xFF);
              ftell += 3;
              break;
            case 32:
              p.setInt32(ftell, f * 0x7FFFFFFF, true);
              ftell += 4;
              break;
            case 0:
              // float
              p.setFloat32(ftell, f, true);
              ftell += 4;
              break;
            default:
              throw new Error("unknown mode");
          }
        }
      }
    }
    return writer.subarray(ftellBegin, ftell);
  }

  static fixChecksum(hca: Uint8Array): Uint8Array {
    HCAInfo.fixHeaderChecksum(hca);
    let info = new HCAInfo(hca);
    for (let i = 0; i < info.format.blockCount; i++) {
      let ftell = info.dataOffset + i * info.blockSize;
      let block = hca.subarray(ftell, ftell + info.blockSize);
      HCACrc16.fix(block, info.blockSize - 2);
    }
    return hca;
  }
}

export default HCA;
