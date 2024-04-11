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
// create & control audio worklet
declare class HCAAudioWorkletHCAPlayer {
    private static readonly feedByteMax;
    get isAlive(): boolean;
    get initialized(): boolean;
    get unlocked(): boolean;
    private _initialized; // initially there must be something to play
    private _unlocked;
    private isPlaying;
    playInBackground: boolean; // FIXME
    private requestedToPlay;
    private source?;
    private srcBuf?;
    private info;
    private hasLoop;
    private cipher?;
    private verifyCsum;
    get blockChecksumVerification(): boolean;
    set blockChecksumVerification(val: boolean);
    private readonly feedBlockCount;
    private get feedSize();
    private totalFedBlockCount;
    private get remainingBlockCount();
    private get downloadBufferSize();
    private readonly selfUrl;
    readonly sampleRate: number;
    readonly channelCount: number;
    private readonly audioCtx;
    private readonly hcaPlayerNode;
    private readonly gainNode;
    get volume(): number;
    set volume(val: number);
    private readonly taskQueue;
    private taskHandler;
    static create(selfUrl: URL, source: Uint8Array | URL, key1?: any, key2?: any, subkey?: any): Promise<HCAAudioWorkletHCAPlayer>;
    private _terminate;
    private readonly visibilityChangeListener;
    private constructor();
    private static getCipher;
    private static readAndAppend;
    private static getHCAInfoFromURL;
    setSource(source: Uint8Array | URL, key1?: any, key2?: any, subkey?: any): Promise<void>;
    // not supposed to be used directly
    private _resume;
    private _suspend;
    private _pause;
    private _play;
    private readonly stopCmdItem;
    // wraped to ensure atomicity
    private setPlaying;
    pause(): Promise<void>;
    play(): Promise<void>;
    stop(): Promise<void>;
    shutdown(forcibly?: boolean): Promise<void>;
}
// create & control worker
declare class HCAWorker {
    get isAlive(): boolean;
    private readonly selfUrl;
    private readonly taskQueue;
    private hcaWorker;
    /*private*/ awHcaPlayer?: HCAAudioWorkletHCAPlayer; // FIXME should be private
    private lastTick;
    shutdown(forcibly?: boolean): Promise<void>;
    tick(): Promise<void>;
    tock(text?: string): Promise<number>;
    static create(selfUrl: URL | string): Promise<HCAWorker>;
    private constructor();
    // commands
    getTransferConfig(): Promise<{
        transferArgs: boolean;
        replyArgs: boolean;
    }>;
    configTransfer(transferArgs: boolean, replyArgs: boolean): Promise<void>;
    fixHeaderChecksum(hca: Uint8Array): Promise<Uint8Array>;
    fixChecksum(hca: Uint8Array): Promise<Uint8Array>;
    findKey(hca: Uint8Array, givenKeyList?: [
        any,
        any
    ][], subkey?: any, threshold?: number, depth?: number): Promise<[
        number,
        number
    ] | undefined>;
    decrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Promise<Uint8Array>;
    encrypt(hca: Uint8Array, key1?: any, key2?: any, subkey?: any): Promise<Uint8Array>;
    addHeader(hca: Uint8Array, sig: string, newData: Uint8Array): Promise<Uint8Array>;
    addCipherHeader(hca: Uint8Array, cipherType?: number): Promise<Uint8Array>;
    decode(hca: Uint8Array, mode?: number, loop?: number, volume?: number): Promise<Uint8Array>;
    encode(hca: Uint8Array, key1: any, key2: any, subkey: any): Promise<Uint8Array>;
    loadHCAForPlaying(hca: URL | string | Uint8Array, key1?: any, key2?: any, subkey?: any): Promise<void>;
    pausePlaying(): Promise<void>;
    resumePlaying(): Promise<void>;
    stopPlaying(): Promise<void>;
}
// https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/meta/awb.c#L13
declare class AWBArchive {
    readonly version: number;
    readonly offsetSize: number;
    readonly waveIdAlignment: number;
    readonly totalSubsongs: number;
    readonly offsetAlignment: number;
    readonly subkey: number;
    readonly hcaFiles: {
        waveID: number;
        file: Uint8Array;
    }[];
    static isAWB(file: Uint8Array): boolean;
    constructor(awb: Uint8Array);
}
// WebAudio-based loop player
declare class HCAWebAudioLoopPlayer {
    get unlocked(): boolean;
    private _unlocked;
    private bufSrcStarted;
    private closed;
    playInBackground: boolean; // FIXME
    private requestedToPlay;
    private readonly audioCtx;
    private readonly info;
    private readonly bufSrc;
    private readonly gainNode;
    get volume(): number;
    set volume(val: number);
    private readonly visibilityChangeListener;
    private constructor();
    static create(decrypted: Uint8Array, worker: HCAWorker, volume?: number): Promise<HCAWebAudioLoopPlayer>;
    // not supposed to be used directly
    private _play;
    private _pause;
    play(): void;
    pause(): void;
    stop(): Promise<void>;
}
export { HCA, HCAInfo, HCAWorker, AWBArchive, HCAWebAudioLoopPlayer };
