declare class Mdct {
    MdctBits: number;
    MdctSize: number;
    Scale: number;
    private static _tableBits;
    private static SinTables;
    private static CosTables;
    private static readonly ShuffleTables;
    private readonly _mdctPrevious;
    private readonly _imdctPrevious;
    private readonly _imdctWindow;
    private readonly _scratchMdct;
    private readonly _scratchDct;
    constructor(mdctBits: number, window: Float64Array, scale?: number);
    private static SetTables;
    RunMdct(input: Float64Array, output: Float64Array): void;
    RunImdct(input: Float64Array, output: Float64Array): void;
    /**
     * Does a Type-4 DCT.
     *
     * @param input The input array containing the time or frequency-domain samples
     * @param output The output array that will contain the transformed time or frequency-domain samples
     */
    private Dct4;
    private static GenerateTrigTables;
    private static GenerateShuffleTable;
    // ReSharper disable once UnusedMember.Local
    /**
     * Does a Type-4 DCT. Intended for reference.
     *
     * @param input The input array containing the time or frequency-domain samples
     * @param output The output array that will contain the transformed time or frequency-domain samples
     */
    private Dct4Slow;
}
declare module MdctWrapper {
    export { Mdct };
}
import HCAMdct = MdctWrapper.Mdct;
declare enum HCAChannelType {
    Discrete = 0,
    StereoPrimary = 1,
    StereoSecondary = 2
}
declare class HCAChannel {
    Type: HCAChannelType;
    CodedScaleFactorCount: number;
    PcmFloat: Float64Array[];
    Spectra: Float64Array[];
    ScaledSpectra: Float64Array[];
    QuantizedSpectra: Int32Array[];
    Gain: Float64Array;
    Intensity: Int32Array;
    HfrScales: Int32Array;
    HfrGroupAverageSpectra: Float64Array;
    Mdct: HCAMdct;
    ScaleFactors: Int32Array;
    Resolution: Int32Array;
    HeaderLengthBits: number;
    ScaleFactorDeltaBits: number;
    constructor(values: Record<string, any>);
}
declare class HCAInfo {
    private rawHeader;
    get ChannelCount(): number;
    set ChannelCount(value: number);
    get SampleCount(): number;
    set SampleCount(value: number);
    get TrackCount(): number;
    set TrackCount(value: number);
    get SampleRate(): number;
    set SampleRate(value: number);
    set MinResolution(value: number);
    get MinResolution(): number;
    set MaxResolution(value: number);
    get MaxResolution(): number;
    get TotalBandCount(): number;
    set TotalBandCount(value: number);
    get BaseBandCount(): number;
    set BaseBandCount(value: number);
    get StereoBandCount(): number;
    set StereoBandCount(value: number);
    get BandsPerHfrGroup(): number;
    set BandsPerHfrGroup(value: number);
    get ChannelConfig(): number;
    set ChannelConfig(value: number);
    get LoopStartFrame(): number;
    set LoopStartFrame(value: number);
    get LoopEndFrame(): number;
    set LoopEndFrame(value: number);
    get PreLoopSamples(): number;
    set PreLoopSamples(value: number);
    get PostLoopSamples(): number;
    set PostLoopSamples(value: number);
    get FrameCount(): number;
    set FrameCount(value: number);
    get AppendedSamples(): number;
    set AppendedSamples(value: number);
    get LoopStartSample(): number;
    get HfrBandCount(): number;
    set HfrBandCount(value: number);
    get LoopEndSample(): number;
    get Volume(): number;
    set Volume(value: number);
    set Comment(value: string);
    get Comment(): string;
    Looping: boolean;
    FrameSize: number;
    InsertedSamples: number;
    HeaderSize: number;
    CommentLength: number;
    EncryptionType: number;
    version: string;
    versionMajor: number;
    versionMinor: number;
    dataOffset: number;
    format: {
        channelCount: number;
        samplingRate: number;
        blockCount: number;
        droppedHeader: number;
        droppedFooter: number;
    };
    blockSize: number;
    hasHeader: Record<string, boolean>;
    headerOffset: Record<string, [
        number,
        number
    ]>; // [start (inclusive), end (exclusive)]
    kbps: number;
    compDec: {
        MinResolution: number;
        MaxResolution: number;
        TrackCount: number;
        ChannelConfig: number;
        TotalBandCount: number;
        BaseBandCount: number;
        StereoBandCount: number;
        HfrBandCount: number;
        BandsPerHfrGroup: number;
        Reserved1: number;
        Reserved2: number;
    };
    dec: {
        DecStereoType: number;
    };
    loop: {
        start: number;
        end: number;
        droppedHeader: number;
        droppedFooter: number;
    };
    vbr: {
        MaxBlockSize: number;
        NoiseLevel: number;
    };
    UseAthCurve: boolean;
    cipher: number;
    rva: number;
    comment: string;
    // computed sample count/offsets
    HfrGroupCount: number;
    fullSampleCount: number;
    startAtSample: number;
    fullEndAtSample: number;
    loopStartAtSample: number;
    loopEndAtSample: number;
    loopSampleCount: number;
    loopStartTime: number; // in seconds
    loopEndTime: number; // in seconds
    loopDuration: number; // in seconds
    endAtSample: number;
    sampleCount: number;
    duration: number; // in seconds
    // full file size / data part (excluding header, just blocks/frames) size
    fullSize: number;
    dataSize: number;
    // depends on decoding mode (bit count)
    inWavSize?: HCAInfoInWavSize;
    private static getSign;
    clone(): HCAInfo;
    private parseHeader;
    private checkValidity;
    getRawHeader(): Uint8Array;
    private isHeaderChanged;
    modify(hca: Uint8Array, sig: string, newData: Uint8Array): void;
    static addHeader(hca: Uint8Array, sig: string, newData: Uint8Array): Uint8Array;
    static addCipherHeader(hca: Uint8Array, cipherType?: number): Uint8Array;
    static fixHeaderChecksum(hca: Uint8Array): Uint8Array;
    calcInWavSize(mode?: number): HCAInfoInWavSize;
    constructor(hca: Uint8Array, changeMask?: boolean, encrypt?: boolean, skipMake?: boolean);
    CalculateHfrValues(): void;
    GetClone(): {} & this;
}
interface HCAInfoInWavSize {
    bitsPerSample: number;
    sample: number;
    block: number;
    dropped: {
        header: number;
        footer: number;
    };
    loop?: {
        loopPart: number;
        dropped: {
            header: number;
            footer: number;
        };
    };
}
declare class HCAFrame {
    static readonly SubframesPerFrame = 8;
    static readonly SubFrameSamplesBits = 7;
    static readonly SamplesPerSubFrame: number;
    static readonly SamplesPerFrame: number;
    Hca: HCAInfo;
    Channels: HCAChannel[];
    AthCurve: Uint8Array;
    AcceptableNoiseLevel: number;
    EvaluationBoundary: number;
    constructor(hca: HCAInfo);
    private static GetChannelTypes;
    /**
     * Scales an ATH curve to the specified frequency.
     *
     * The original ATH curve is for a frequency of 41856 Hz.
     * @param frequency The frequency to scale the curve to.
     * @returns The scaled ATH curve
     */
    private static ScaleAthCurve;
}
declare class HCA {
    constructor();
    static decrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Uint8Array;
    static encrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Uint8Array;
    static decryptOrEncrypt(hca: Uint8Array, encrypt: boolean, key1?: any, key2?: any, subkey?: any): Uint8Array;
    static findKey(hca: Uint8Array, givenKeyList?: [
        any,
        any
    ][], subkey?: any, threshold?: number, depth?: number): [
        number,
        number
    ] | undefined;
    static encode(wav: Uint8Array, key1?: number, key2?: number, subkey?: number): Uint8Array;
    static decode(hca: Uint8Array, mode?: number, loop?: number, volume?: number): Uint8Array;
    static decodeBlock(frame: HCAFrame, block: Uint8Array): void;
    static writeToPCM(frame: HCAFrame, mode?: number, volume?: number, writer?: Uint8Array, ftell?: number): Uint8Array;
    static fixChecksum(hca: Uint8Array): Uint8Array;
}
export { HCA, HCAInfo };
