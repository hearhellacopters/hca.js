import HCAInfo from "../../Codecs/CriHca/HcaInfo";
import HCADecoder from '../../Codecs/CriHca/CriHcaDecoder';
import wavReader from '../../../wav/wavReader';
import HCAParameters from "../../Codecs/CriHca/CriHcaParameters";
import HCAEncoder from "../../Codecs/CriHca/CriHcaEncoder";
import {SamplesPerFrame} from "../../Codecs/CriHca/CriHcaConstants";
import {arrayCopy,arrayClear} from "../../Utilities/Helpers";

function i2hex(i:number) {
    return ('0' + i.toString(16)).slice(-2).toUpperCase();
}

export default class HCAFormat{
    Hca!: HCAInfo
    AudioData!: Uint8Array[];      
    constructor( b?: HCAFormatBuilder)
    {
        if(b){
            this.AudioData = b.AudioData;
            this.Hca = b.Hca;
        }
    }
   
    public static EncodeFromPcm16(pcm16:wavReader, config?: HCAParameters)
    {
        if(config == undefined){
            config = new HCAParameters(
                pcm16.ChannelCount,
                pcm16.SampleRate,
            )
        }
        config.ChannelCount = pcm16.ChannelCount;
        config.SampleRate = pcm16.SampleRate;
        config.SampleCount = pcm16.SampleCount;
        config.Looping = pcm16.Looping;
        config.LoopStart = pcm16.LoopStart;
        config.LoopEnd = pcm16.LoopEnd;
        //IProgressReport progress = config.Progress;
   
        const encoder = HCAEncoder.InitializeNew(config);
        const pcm = pcm16.Channels;
        var pcmBuffer = Array.from(
            { length: pcm16.ChannelCount },
            () => new Int16Array(SamplesPerFrame),
        );
   
        //progress?.SetTotal(encoder.Hca.FrameCount);

        var audio: Uint8Array[] = Array.from(
            { length: encoder.Hca.FrameCount },
            () => new Uint8Array(encoder.FrameSize),
        );

        
        var frameNum = 0;
        for (let i = 0; frameNum < encoder.Hca.FrameCount; i++)
        {
            var samplesToCopy = Math.min(pcm16.SampleCount - i * SamplesPerFrame, SamplesPerFrame);
            for (let c = 0; c < pcm.length; c++)
            {
                arrayCopy(pcm[c], SamplesPerFrame * i, pcmBuffer[c], 0, samplesToCopy);
            }

            var framesWritten = encoder.Encode(pcmBuffer, audio[frameNum]);


            if (framesWritten == 0)
            {
                throw new Error("Encoder returned no audio. This should not happen.");
            }

            if (framesWritten > 0)
            {
                frameNum++;
                framesWritten--;
                //progress?.ReportAdd(1);
            }
            
            while (framesWritten > 0)
            {
                audio[frameNum] = encoder.GetPendingFrame();
                frameNum++;
                framesWritten--;
                //progress?.ReportAdd(1);
            }

        };
        const builder = new HCAFormatBuilder(audio, encoder.Hca);
        const ret = builder.Build();
        return ret;
    }
   
    GetChannelsInternal(channelRange: Int32Array)
    {
        throw new Error("Not Implemented Exception");
    }
   
    AddInternal(format: HCAFormat)
    {
        throw new Error("Not Implemented Exception");
    }
   
    GetCloneBuilder()
    {
        return new HCAFormatBuilder(this.AudioData, this.Hca.GetClone());
    }

}

class HCAFormatBuilder {
    AudioData!: Uint8Array[];
    Hca!: HCAInfo;
    SampleRate:number;
    SampleCount:number;
    Looping!:boolean;
    LoopStart!:number;
    LoopEnd!:number;
    constructor(audioData: Uint8Array[], hca: HCAInfo){ 
        this.AudioData = audioData;
        this.Hca = hca;
        this.SampleRate = hca.SampleRate;
        this.SampleCount = hca.SampleCount;

        if (hca.Looping)
        {
            this.Looping   = true;
            this.LoopStart = hca.LoopStartSample;
            this.LoopEnd   = hca.LoopEndSample;
        }
    }
    get ChannelCount(){
        return this.Hca.ChannelCount || 0;
    }

    WithLoop(loop: boolean, loopStart?: number, loopEnd?: number)
    {

        if (loop && (loopStart != this.Hca.LoopStartSample || loopEnd != this.Hca.LoopEndSample))
        {
            throw new Error("Changing the loop points on HCA audio without re-encoding is not supported.");
        }

        this.WithLoopImpl(loop);
        return this;
    }

    WithLoopImpl(loop: boolean)
    {
        if (loop && !this.Hca.Looping)
        {
            throw new Error("Adding a loop to HCA audio without re-encoding is not supported.");
        }

        this.Hca.Looping = loop;
    }

    Build(){
        return new HCAFormat(this);
    }
}
