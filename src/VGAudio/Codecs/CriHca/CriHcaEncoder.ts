
import HCAInfo from "./HcaInfo";
import HCAQuality from "./CriHcaQuality";
import HCAChannel from './CriHcaChannel';
import HCAFrame from "./CriHcaFrame";
import Crc16 from "../../Utilities/Crc16";
import HCAParameters from "./CriHcaParameters";
import ChannelType from './ChannelType';
import HCATables from "./CriHcaTables";
import { 
    SubframesPerFrame, 
    SamplesPerSubFrame, 
    SamplesPerFrame
} from "./CriHcaConstants";
import {GetNextMultiple, DivideByRoundUp, Clamp, arrayClear, arrayCopy, printArray} from '../../Utilities/Helpers';
import HCAPacking from "./CriHcaPacking";

export default class HCAEncoder {
    private constructor() { }

    public Hca!: HCAInfo;
    public Quality!: HCAQuality;
    public Bitrate!: number;
    public CutoffFrequency!: number;
    public get PendingFrameCount(): number {
        return this.HcaOutputBuffer.length;
    }
    public get FrameSize(): number {
        return this.Hca.FrameSize;
    }

    private Channels!: HCAChannel[];
    private Frame!: HCAFrame;
    private Crc: Crc16 = Crc16;
    private PcmBuffer: Int16Array[] = [];
    private BufferPosition: number = 0;
    private get BufferRemaining(): number {
        return SamplesPerFrame - this.BufferPosition;
    }
    private BufferPreSamples: number = 0;
    private SamplesProcessed: number = 0;
    public FramesProcessed: number = 0;
    private PostSamples: number = 0;
    private PostAudio: Int16Array[] = [];
    private HcaOutputBuffer: Uint8Array[] = [];

    public static InitializeNew(config: HCAParameters): HCAEncoder {
        const encoder = new HCAEncoder();
        encoder.Initialize(config);
        return encoder;
    }

    public Initialize(config: HCAParameters): void {
        if (config.ChannelCount > 8) {
            throw new Error("HCA channel count must be 8 or below");
        }

        this.CutoffFrequency = config.SampleRate / 2;
        this.Quality = config.Quality;
        this.PostSamples = 128;

        this.Hca = new HCAInfo(new Uint8Array(),false,false,true);
        this.Hca.ChannelCount = config.ChannelCount;
        this.Hca.TrackCount = 1;
        this.Hca.SampleCount = config.SampleCount;
        this.Hca.SampleRate = config.SampleRate;
        this.Hca.MinResolution = 1;
        this.Hca.MaxResolution = 15;
        this.Hca.InsertedSamples = SamplesPerSubFrame;

        this.Bitrate = this.CalculateBitrate(this.Hca, this.Quality, config.Bitrate, config.LimitBitrate);
        this.CalculateBandCounts(this.Hca, this.Bitrate, this.CutoffFrequency);
        this.Hca.CalculateHfrValues();
        this.SetChannelConfiguration(this.Hca);

        let inputSampleCount = this.Hca.SampleCount;

        if (config.Looping) {
            this.Hca.Looping = true;
            this.Hca.SampleCount = Math.min(config.LoopEnd, config.SampleCount);
            this.Hca.InsertedSamples += GetNextMultiple(config.LoopStart, SamplesPerFrame) - config.LoopStart;
            this.CalculateLoopInfo(this.Hca, config.LoopStart, config.LoopEnd);
            inputSampleCount = Math.min(GetNextMultiple(this.Hca.SampleCount, SamplesPerSubFrame), config.SampleCount);
            inputSampleCount += SamplesPerSubFrame * 2;
            this.PostSamples = inputSampleCount - this.Hca.SampleCount;
        }

        this.CalculateHeaderSize(this.Hca);

        const totalSamples = inputSampleCount + this.Hca.InsertedSamples;
        this.Hca.FrameCount = DivideByRoundUp(totalSamples, SamplesPerFrame); //format.blockCount
        this.Hca.AppendedSamples = this.Hca.FrameCount * SamplesPerFrame - this.Hca.InsertedSamples - inputSampleCount;

        this.Frame = new HCAFrame(this.Hca);
        this.Channels = this.Frame.Channels;
        this.PcmBuffer = Array.from({ length: this.Hca.ChannelCount }, () => new Int16Array(SamplesPerFrame));
        this.PostAudio = Array.from({ length: this.Hca.ChannelCount }, () => new Int16Array(this.PostSamples));
        this.HcaOutputBuffer = [];

        this.BufferPreSamples = this.Hca.InsertedSamples - 128;
    }

    public Encode(pcm: Int16Array[], hcaOut: Uint8Array): number {
        
        if (this.FramesProcessed >= this.Hca.FrameCount) {
            throw new Error("All audio frames have already been output by the encoder");
        }

        let framesOutput = 0;
        let pcmPosition = new Int32Array([0]);
        //this doesnt trigger first time called
        if (this.BufferPreSamples > 0) {
            framesOutput = this.EncodePreAudio(pcm, hcaOut, framesOutput);
        }
        //this doesnt call on non-loops
        if (this.Hca.Looping && this.Hca.LoopStartSample + this.PostSamples >= this.SamplesProcessed && this.Hca.LoopStartSample < this.SamplesProcessed + SamplesPerFrame) {
            this.SaveLoopAudio(pcm);
        }
        
        while (SamplesPerFrame - pcmPosition[0] > 0 && this.Hca.SampleCount > this.SamplesProcessed) {
            framesOutput = this.EncodeMainAudio(pcm, hcaOut, framesOutput, pcmPosition);
        }
        if (this.Hca.SampleCount === this.SamplesProcessed) {
            framesOutput = this.EncodePostAudio(pcm, hcaOut, framesOutput);
        }

        return framesOutput;
    }

    public GetPendingFrame(): Uint8Array {
        if (this.PendingFrameCount === 0) {
            throw new Error("There are no pending frames");
        }

        //TODO fix me
        return this.HcaOutputBuffer[this.PendingFrameCount];
    }

    private EncodePreAudio(pcm: Int16Array[], hcaOut: Uint8Array, framesOutput: number): number {
        while (this.BufferPreSamples > SamplesPerFrame) {
            this.BufferPosition = SamplesPerFrame;
            framesOutput = this.OutputFrame(framesOutput, hcaOut);
            this.BufferPreSamples -= SamplesPerFrame;
        }

        for (let j = 0; j < this.BufferPreSamples; j++) {
            for (let i = 0; i < pcm.length; i++) {
                this.PcmBuffer[i][j] = pcm[i][0];
            }
        }

        this.BufferPosition = this.BufferPreSamples;
        this.BufferPreSamples = 0;

        return framesOutput;
    }

    private EncodeMainAudio(pcm: Int16Array[], hcaOut: Uint8Array, framesOutput: number, pcmPosition: Int32Array): number {
        let toCopy = Math.min(this.BufferRemaining, SamplesPerFrame - pcmPosition[0]);
        toCopy = Math.min(toCopy, this.Hca.SampleCount - this.SamplesProcessed);

        for (let i = 0; i < pcm.length; i++) {
            arrayCopy(pcm[i], pcmPosition[0], this.PcmBuffer[i], this.BufferPosition, toCopy);
        }

        this.BufferPosition += toCopy;
        this.SamplesProcessed += toCopy;
        pcmPosition[0] += toCopy;

        framesOutput = this.OutputFrame(framesOutput, hcaOut);

        return framesOutput;
    }

    private EncodePostAudio(pcm: Int16Array[], hcaOut: Uint8Array, framesOutput: number): number {
        let postPos = 0;
        let remaining = this.PostSamples;

        while (postPos < remaining) {
            const toCopy = Math.min(this.BufferRemaining, remaining - postPos);

            for (let i = 0; i < pcm.length; i++) {
                arrayCopy(this.PostAudio[i], postPos, this.PcmBuffer[i], this.BufferPosition, toCopy);
            }

            this.BufferPosition += toCopy;
            postPos += toCopy;

            framesOutput = this.OutputFrame(framesOutput, hcaOut);
        }

        while (this.FramesProcessed < this.Hca.FrameCount) {
            for (let i = 0; i < pcm.length; i++) {
                arrayClear(this.PcmBuffer[i], this.BufferPosition, this.BufferRemaining);
            }
            this.BufferPosition = SamplesPerFrame;

            framesOutput = this.OutputFrame(framesOutput, hcaOut);
        }

        return framesOutput;
    }

    private SaveLoopAudio(pcm: Int16Array[]): void {
        const startPos = Math.max(this.Hca.LoopStartSample - this.SamplesProcessed, 0);
        const loopPos = Math.max(this.SamplesProcessed - this.Hca.LoopStartSample, 0);
        const endPos = Math.min(this.Hca.LoopStartSample - this.SamplesProcessed + this.PostSamples, SamplesPerFrame);
        const length = endPos - startPos;

        for (let i = 0; i < pcm.length; i++) {
            arrayCopy(pcm[i], startPos, this.PostAudio[i], loopPos, length);
        }
    }

    private OutputFrame(framesOutput: number, hcaOut: Uint8Array): number {

        if (this.BufferRemaining !== 0) {
            return framesOutput;
        }

        const hca = framesOutput === 0 ? hcaOut : new Uint8Array(this.Hca.FrameSize);
        this.EncodeFrame(this.PcmBuffer, hca);

        if (framesOutput > 0) {
            this.HcaOutputBuffer.push(hca);
        }

        this.BufferPosition = 0;
        this.FramesProcessed++;

        return framesOutput + 1;
    }

    private EncodeFrame(pcm: Int16Array[], hcaOut: Uint8Array): void {
        this.PcmToFloat(pcm, this.Channels);
        this.RunMdct(this.Channels);
        //this gets passed over
        this.EncodeIntensityStereo(this.Frame);
        this.CalculateScaleFactors(this.Channels);
        this.ScaleSpectra(this.Channels);
        this.CalculateHfrGroupAverages(this.Frame);
        this.CalculateHfrScale(this.Frame);
        this.CalculateFrameHeaderLength(this.Frame);
        this.CalculateNoiseLevel(this.Frame);
        this.CalculateEvaluationBoundary(this.Frame);
        this.CalculateFrameResolutions(this.Frame);
        this.QuantizeSpectra(this.Channels);
        HCAPacking.PackFrame(this.Frame, hcaOut);
    }

    private CalculateBitrate(hca: HCAInfo, quality: HCAQuality, bitrate: number, limitBitrate: boolean): number {
        const pcmBitrate = hca.SampleRate * hca.ChannelCount * 16;
        const maxBitrate = pcmBitrate / 4;
        let minBitrate = 0;
        let compressionRatio = 6;

        switch (quality) {
            case HCAQuality.Highest:
                compressionRatio = 4;
                break;
            case HCAQuality.High:
                compressionRatio = 6;
                break;
            case HCAQuality.Middle:
                compressionRatio = 8;
                break;
            case HCAQuality.Low:
                compressionRatio = hca.ChannelCount === 1 ? 10 : 12;
                break;
            case HCAQuality.Lowest:
                compressionRatio = hca.ChannelCount === 1 ? 12 : 16;
                break;
        }

        bitrate = bitrate !== 0 ? bitrate : (pcmBitrate / compressionRatio) >> 0;

        if (limitBitrate) {
            minBitrate = Math.min(hca.ChannelCount === 1 ? 42666 : 32000 * hca.ChannelCount, pcmBitrate / 6) >> 0;
        }

        return Clamp(bitrate, minBitrate, maxBitrate);
    }

    private CalculateBandCounts(hca: HCAInfo, bitrate: number, cutoffFreq: number): void {
        hca.FrameSize = (bitrate * 1024 / hca.SampleRate / 8) >> 0;

        let numGroups = 0;
        const pcmBitrate = hca.SampleRate * hca.ChannelCount * 16;
        let hfrRatio: number;
        let cutoffRatio: number;

        if (hca.ChannelCount <= 1 || pcmBitrate / bitrate <= 6) {
            hfrRatio = 6;
            cutoffRatio = 12;
        } else {
            hfrRatio = 8;
            cutoffRatio = 16;
        }

        if (bitrate < pcmBitrate / cutoffRatio) {
            cutoffFreq = Math.min(cutoffFreq, cutoffRatio * bitrate / (32 * hca.ChannelCount))  >> 0;
        }

        const totalBandCount = Math.round(cutoffFreq * 256.0 / hca.SampleRate) >> 0;
        const hfrStartBand = Math.min(totalBandCount, Math.round((hfrRatio * bitrate * 128.0) / pcmBitrate)) >> 0;
        const stereoStartBand = hfrRatio === 6 ? hfrStartBand : ((hfrStartBand + 1) / 2) >> 0;
        const hfrBandCount = totalBandCount - hfrStartBand;
        const bandsPerGroup = DivideByRoundUp(hfrBandCount, 8);

        if (bandsPerGroup > 0) {
            numGroups = DivideByRoundUp(hfrBandCount, bandsPerGroup);
        }

        hca.TotalBandCount = totalBandCount;
        hca.BaseBandCount = stereoStartBand;
        hca.StereoBandCount = hfrStartBand - stereoStartBand;
        hca.HfrGroupCount = numGroups;
        hca.BandsPerHfrGroup = bandsPerGroup;
    }

    private SetChannelConfiguration(hca: HCAInfo, channelConfig: number = -1): void {
        const channelsPerTrack = (hca.ChannelCount / hca.TrackCount) >> 0;

        if (channelConfig === -1) {
            channelConfig = HCATables.DefaultChannelMapping[channelsPerTrack];
        }

        if (HCATables.ValidChannelMappings[channelsPerTrack - 1][channelConfig] != 1) {
            throw new Error("Channel mapping is not valid.");
        }

        hca.ChannelConfig = channelConfig;
    }

    private CalculateLoopInfo(hca: HCAInfo, loopStart: number, loopEnd: number): void {
        loopStart += hca.InsertedSamples;
        loopEnd += hca.InsertedSamples;

        hca.LoopStartFrame = (loopStart / SamplesPerFrame) >> 0;
        hca.PreLoopSamples = loopStart % SamplesPerFrame >> 0;
        hca.LoopEndFrame = (loopEnd / SamplesPerFrame) >> 0;
        hca.PostLoopSamples = (SamplesPerFrame - loopEnd % SamplesPerFrame) >> 0;

        if (hca.PostLoopSamples === SamplesPerFrame) {
            hca.LoopEndFrame--;
            hca.PostLoopSamples = 0;
        }
    }

    private CalculateHeaderSize(hca: HCAInfo): void {
        const baseHeaderSize = 96;
        const baseHeaderAlignment = 32;
        const loopFrameAlignment = 2048;

        hca.HeaderSize = GetNextMultiple(baseHeaderSize + hca.CommentLength, baseHeaderAlignment);

        if (hca.Looping) {
            const loopFrameOffset = hca.HeaderSize + hca.FrameSize * hca.LoopStartFrame;
            const paddingBytes = GetNextMultiple(loopFrameOffset, loopFrameAlignment) - loopFrameOffset;
            const paddingFrames = (paddingBytes / hca.FrameSize) >> 0;

            hca.InsertedSamples += paddingFrames * SamplesPerFrame;
            hca.LoopStartFrame += paddingFrames;
            hca.LoopEndFrame += paddingFrames;
            hca.HeaderSize += paddingBytes % hca.FrameSize;
        }
    }

    private QuantizeSpectra(channels: HCAChannel[]): void {
        for (const channel of channels) {
            for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
                const scaled = channel.ScaledSpectra[i];
                const resolution = channel.Resolution[i];
                const stepSizeInv = HCATables.QuantizerInverseStepSize[resolution];
                const shiftUp = stepSizeInv + 1;
                const shiftDown = (stepSizeInv + 0.5) >> 0;

                for (let sf = 0; sf < scaled.length; sf++) {
                    const quantizedSpectra = Math.floor(scaled[sf] * stepSizeInv + shiftUp) - shiftDown;
                    channel.QuantizedSpectra[sf][i] = quantizedSpectra;
                }
            }
        }
    }

    private CalculateFrameResolutions(frame: HCAFrame): void {
        for (const channel of frame.Channels) {
            for (let i = 0; i < frame.EvaluationBoundary; i++) {
                channel.Resolution[i] = this.CalculateResolution(channel.ScaleFactors[i], frame.AcceptableNoiseLevel - 1);
            }

            for (let i = frame.EvaluationBoundary; i < channel.CodedScaleFactorCount; i++) {
                channel.Resolution[i] = this.CalculateResolution(channel.ScaleFactors[i], frame.AcceptableNoiseLevel);
            }

            arrayClear(channel.Resolution, channel.CodedScaleFactorCount, channel.Resolution.length - channel.CodedScaleFactorCount);
        }
    }

    private CalculateNoiseLevel(frame: HCAFrame): void {
        var highestBand = frame.Hca.BaseBandCount + frame.Hca.StereoBandCount - 1;
        const availableBits = frame.Hca.FrameSize * 8;
        const maxLevel = 255;
        const minLevel = 0;

        let level = this.BinarySearchLevel(frame.Channels, availableBits, minLevel, maxLevel);
        
        while (level < 0) {
            highestBand -= 2;

            if (highestBand < 0) {
                throw new Error("Bitrate is set too low.");
            }

            for (const channel of frame.Channels) {
                channel.ScaleFactors[highestBand + 1] = 0;
                channel.ScaleFactors[highestBand + 2] = 0;
            }

            this.CalculateFrameHeaderLength(frame);

            level = this.BinarySearchLevel(frame.Channels, availableBits, minLevel, maxLevel);
        }

        frame.AcceptableNoiseLevel = level;
    }

    private CalculateEvaluationBoundary(frame: HCAFrame): void {
        if (frame.AcceptableNoiseLevel === 0) {
            frame.EvaluationBoundary = 0;
            return;
        }

        const availableBits = frame.Hca.FrameSize * 8;
        const maxLevel = 127;
        const minLevel = 0;

        const level = this.BinarySearchBoundary(frame.Channels, availableBits, frame.AcceptableNoiseLevel, minLevel, maxLevel);

        frame.EvaluationBoundary = level >= 0 ? level : -1;

        if(frame.EvaluationBoundary == -1){
            throw new Error("Evaluation boundary not found.")
        }
    }

    private BinarySearchLevel(channels: HCAChannel[], availableBits: number, low: number, high: number): number {
        const max = high;
        let midValue = 0;

        while (low !== high) {
            const mid = ((low + high) / 2) >> 0;
            midValue = this.CalculateUsedBits(channels, mid, 0);

            if (midValue > availableBits) {
                low = mid + 1;
            } else if (midValue <= availableBits) {
                high = mid;
            }
        }

        return low === max && midValue > availableBits ? -1 : low;
    }

    private BinarySearchBoundary(channels: HCAChannel[], availableBits: number, noiseLevel: number, low: number, high: number): number {
        const max = high;

        while (Math.abs(high - low) > 1) {
            const mid = ((low + high) / 2) >> 0;
            const midValue = this.CalculateUsedBits(channels, noiseLevel, mid);

            if (availableBits < midValue) {
                high = mid - 1;
            } else if (availableBits >= midValue) {
                low = mid;
            }
        }

        if (low === high) {
            return low < max ? low : -1;
        }

        const hiValue = this.CalculateUsedBits(channels, noiseLevel, high);

        return hiValue > availableBits ? low : high;
    }

    private CalculateUsedBits(channels: HCAChannel[], noiseLevel: number, evalBoundary: number): number {
        let length = 16 + 16 + 16;

        for (const channel of channels) {
            length += channel.HeaderLengthBits;
            for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
                const noise = i < evalBoundary ? noiseLevel - 1 : noiseLevel;
                const resolution = this.CalculateResolution(channel.ScaleFactors[i], noise);
                if (resolution >= 8) {
                    const bits = HCATables.QuantizedSpectrumMaxBits[resolution] - 1;
                    const deadZone = HCATables.QuantizerDeadZone[resolution];

                    for (const scaledSpectra of channel.ScaledSpectra[i]) {
                        length += bits;

                        if (Math.abs(scaledSpectra) >= deadZone) {
                            length++;
                        }
                    }
                } else {
                    // To determine the bit count, we need to quantize the value and check
                    // the number of bits its prefix code uses.
                    // Compute the floor function by shifting the numbers to be above 0,
                    // truncating them, then shifting them back down to their original range.
                    const stepSizeInv = HCATables.QuantizerInverseStepSize[resolution];
                    const shiftUp = stepSizeInv + 1;
                    const shiftDown = Math.floor(stepSizeInv + 0.5 - 8);

                    for (const scaledSpectra of channel.ScaledSpectra[i]) {
                        const quantizedSpectra = Math.floor(scaledSpectra * stepSizeInv + shiftUp) - shiftDown;
                        length += HCATables.QuantizeSpectrumBits[resolution][quantizedSpectra];
                    }
                }
            }
        }

        return length;
    }

    private CalculateFrameHeaderLength(frame: HCAFrame): void {
        for (const channel of frame.Channels) {
            this.CalculateOptimalDeltaLength(channel);

            if (channel.Type === ChannelType.StereoSecondary) {
                channel.HeaderLengthBits += 32;
            } else if (frame.Hca.HfrGroupCount > 0) {
                channel.HeaderLengthBits += 6 * frame.Hca.HfrGroupCount;
            }
        }
    }

    private CalculateOptimalDeltaLength(channel: HCAChannel): void {
        let emptyChannel = true;

        for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
            if (channel.ScaleFactors[i] !== 0) {
                emptyChannel = false;
                break;
            }
        }

        if (emptyChannel) {
            channel.HeaderLengthBits = 3;
            channel.ScaleFactorDeltaBits = 0;
            return;
        }

        let minDeltaBits = 6;
        let minLength = 3 + 6 * channel.CodedScaleFactorCount;

        for (let deltaBits = 1; deltaBits < 6; deltaBits++) {
            const maxDelta = (1 << (deltaBits - 1)) - 1;
            let length = 3 + 6;

            for (let band = 1; band < channel.CodedScaleFactorCount; band++) {
                const delta = channel.ScaleFactors[band] - channel.ScaleFactors[band - 1];
                length += Math.abs(delta) > maxDelta ? deltaBits + 6 : deltaBits;
            }

            if (length < minLength) {
                minLength = length;
                minDeltaBits = deltaBits;
            }
        }

        channel.HeaderLengthBits = minLength;
        channel.ScaleFactorDeltaBits = minDeltaBits;
    }

    private ScaleSpectra(channels: HCAChannel[]): void {
        for (const channel of channels) {
            for (let b = 0; b < channel.CodedScaleFactorCount; b++)
            {
                const scaledSpectra = channel.ScaledSpectra[b];
                var scaleFactor = channel.ScaleFactors[b];
                for (let sf = 0; sf < scaledSpectra.length; sf++)
                {
                    var coeff = channel.Spectra[sf][b];
                    scaledSpectra[sf] = scaleFactor == 0 ? 0 :
                        Clamp(coeff * HCATables.QuantizerScalingTable[scaleFactor], -0.999999999999, 0.999999999999);
                    // Precision loss when rounding affects the floating point values just below 1.
                    // We avoid this by having clamp values that are about 9000 steps below 1.0.
                    // The number is slightly arbitrary. I just picked one that's far enough from 1
                    // to not cause any issues.
                }
            }
        }
    }

    private CalculateScaleFactors(channels: HCAChannel[]): void {
        for (const channel of channels) {
            for (let b = 0; b < channel.CodedScaleFactorCount; b++) {
                let max = 0;

                for (let sf = 0; sf < SubframesPerFrame; sf++) {
                    const coeff = Math.abs(channel.Spectra[sf][b]);
                    max = Math.max(coeff, max);
                }
                channel.ScaleFactors[b] = this.FindScaleFactor(max);
            }
            arrayClear(channel.ScaleFactors, channel.CodedScaleFactorCount, channel.ScaleFactors.length - channel.CodedScaleFactorCount)
        }
    }

    private FindScaleFactor(value: number): number {
        const sf = HCATables.DequantizerScalingTable;
        let low = 0;
        let high = 63;

        while (low < high) {
            const mid = ((low + high) / 2) >>> 0;

            if (sf[mid] <= value) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    private EncodeIntensityStereo(frame: HCAFrame): void {
        if (frame.Hca.StereoBandCount <= 0) {
            return;
        }

        for (let c = 0; c < frame.Channels.length; c++) {
            if (frame.Channels[c].Type !== ChannelType.StereoPrimary) {
                continue;
            }

            for (let sf = 0; sf < SubframesPerFrame; sf++) {
                const l = frame.Channels[c].Spectra[sf];
                const r = frame.Channels[c + 1].Spectra[sf];

                let energyL = 0;
                let energyR = 0;
                let energyTotal = 0;

                for (let b = frame.Hca.BaseBandCount; b < frame.Hca.TotalBandCount; b++) {
                    energyL += Math.abs(l[b]);
                    energyR += Math.abs(r[b]);
                    energyTotal += Math.abs(l[b] + r[b]);
                }

                energyTotal *= 2;

                const energyLR = energyR + energyL;
                const storedValue = 2 * energyL / energyLR;
                let energyRatio = energyLR / energyTotal;

                energyRatio = Clamp(energyRatio, 0.5, Math.sqrt(2) / 2);

                let quantized = 1;

                if (energyR > 0 || energyL > 0) {
                    while (quantized < 13 && HCATables.IntensityRatioBoundsTable[quantized] >= storedValue) {
                        quantized++;
                    }
                } else {
                    quantized = 0;
                    energyRatio = 1;
                }

                frame.Channels[c + 1].Intensity[sf] = quantized;

                for (let b = frame.Hca.BaseBandCount; b < frame.Hca.TotalBandCount; b++) {
                    l[b] = (l[b] + r[b]) * energyRatio;
                    r[b] = 0;
                }
            }
        }
    }

    private CalculateHfrGroupAverages(frame: HCAFrame): void {
        const hca = frame.Hca;

        if (hca.HfrGroupCount === 0) {
            return;
        }

        const hfrStartBand = hca.StereoBandCount + hca.BaseBandCount;

        for (const channel of frame.Channels) {
            if (channel.Type === ChannelType.StereoSecondary) {
                continue;
            }

            for (let group = 0, band = hfrStartBand; group < hca.HfrGroupCount; group++) {
                let sum = 0.0;
                let count = 0;

                for (let i = 0; i < hca.BandsPerHfrGroup && band < SamplesPerSubFrame; band++, i++) {
                    for (let subframe = 0; subframe < SubframesPerFrame; subframe++) {
                        sum += Math.abs(channel.Spectra[subframe][band]);
                    }

                    count += SubframesPerFrame;
                }

                channel.HfrGroupAverageSpectra[group] = sum / count;
            }
        }
    }

    private CalculateHfrScale(frame: HCAFrame): void {
        const hca = frame.Hca;

        if (hca.HfrGroupCount === 0) {
            return;
        }

        const hfrStartBand = hca.StereoBandCount + hca.BaseBandCount;
        const hfrBandCount = Math.min(hca.HfrBandCount, hca.TotalBandCount - hca.HfrBandCount);

        for (const channel of frame.Channels) {
            if (channel.Type === ChannelType.StereoSecondary) {
                continue;
            }

            const groupSpectra = channel.HfrGroupAverageSpectra;

            for (let group = 0, band = 0; group < hca.HfrGroupCount; group++) {
                let sum = 0.0;
                let count = 0;

                for (let i = 0; i < hca.BandsPerHfrGroup && band < hfrBandCount; band++, i++) {
                    for (let subframe = 0; subframe < SubframesPerFrame; subframe++) {
                        sum += Math.abs(channel.ScaledSpectra[hfrStartBand - band - 1][subframe]);
                    }

                    count += SubframesPerFrame;
                }

                const averageSpectra = sum / count;

                if (averageSpectra > 0.0) {
                    groupSpectra[group] *= Math.min(1.0 / averageSpectra, Math.sqrt(2));
                }

                channel.HfrScales[group] = this.FindScaleFactor(groupSpectra[group]);
            }
        }
    }

    private RunMdct(channels: HCAChannel[]): void {
        for (const channel of channels) {
            for (let sf = 0; sf < SubframesPerFrame; sf++) {
                channel.Mdct.RunMdct(channel.PcmFloat[sf], channel.Spectra[sf]);
            }
        }
    }

    private PcmToFloat(pcm: Int16Array[], channels: HCAChannel[]): void {
        for (let c = 0; c < channels.length; c++)
        {
            var pcmIdx = 0;
            for (let sf = 0; sf < SubframesPerFrame; sf++)
            {
                for (let i = 0; i < SamplesPerSubFrame; i++)
                {
                    channels[c].PcmFloat[sf][i] = pcm[c][pcmIdx++] * (1.0 / 32768.0);
                }
            }
        }
    }

    private CalculateResolution(scaleFactor: number, noiseLevel: number): number {
        if (scaleFactor == 0)
        {
            return 0;
        }

        var curvePosition = Math.round(noiseLevel - 5 * scaleFactor / 2 + 2);
        curvePosition = Clamp(curvePosition, 0, 58);
        return HCATables.ScaleToResolutionCurve[curvePosition];
    }
}



