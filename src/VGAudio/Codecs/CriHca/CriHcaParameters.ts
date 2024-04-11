import HCAQuality from "./CriHcaQuality";

class HCAParameters {
    Looping = false;
    LimitBitrate = false;
    Quality = HCAQuality.High;
    Bitrate = 0;
    ChannelCount = 0;
    SampleRate = 0;
    LoopStart = 0;
    LoopEnd = 0;
    SampleCount = 0;
    constructor(
        ChannelCount?: number,
        SampleRate?: number,
        SampleCount?: number,
        LoopStart?: number,
        LoopEnd?: number,
        Quality?: number,
        Bitrate?: number,
        LimitBitrate?: boolean,
    ) {
        if(LoopStart !=undefined && LoopEnd !=undefined){
            this.Looping = LoopEnd > LoopStart;
        }
        this.Quality      = Quality||HCAQuality.High;
        this.Bitrate      = Bitrate||0;
        this.LimitBitrate = LimitBitrate||false;
        this.ChannelCount = ChannelCount||0;
        this.SampleRate   = SampleRate||0;
        this.LoopStart    = LoopStart||0;
        this.LoopEnd      = LoopEnd||0;
        this.SampleCount  = SampleCount||0;
    }
};

export default HCAParameters;