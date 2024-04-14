type POINT = {
    dwIdentifier:number
    dwPosition:number
    fccChunk:String
    dwChunkStart:number
    dwBlockStart:number
    dwSampleOffset:number
}

type SAMPLELOOP = {
    loopID: number,
    type: number,
    start: number,   
    end: number, 
    fraction: number,
    loopTimes: number,
}

export default class wavReader{
    private p: DataView;
    riffHead: string;
    fileSize: number;
    waveHead: string;
    wFormatTag = 0;
    ChannelCount = 0;
    SampleRate = 0;
    dwAvgBytesPerSec = 0;
    wBlockAlign = 0;
    BPS = 0;
    wcbsize = 0;
    wSamplesPerBlock = 0;
    width = 0;
    numOfSamples = 0;
    numSamplesPerChanel = 0;
    SampleCount = 0;
    Channels: (Int8Array | Int16Array | Int32Array)[] = [new Int8Array()];
    dwCuePoints = 0;
    Points: POINT[] = [];
    LISTChunkType = "";
    SampleChunkType = "";
    manufacturer = 0;
    product = 0;
    samplePeriod = 0;
    MIDIUnityNote = 0;
    MIDIPitchFraction = 0;
    SMPTEFormat = 0;
    SMPTEOffset = 0;
    NumSampleLoops = 0;
    SampleData = 0;
    loops: SAMPLELOOP[] = [];
    LoopStart = 0;
    LoopEnd = 0;
    Looping = false;
    DatachunkSize = 0;
    durationInSeconds = 0;
    constructor(src: Uint8Array){
        this.p = new DataView(src.buffer);
        var ftell = 0;
        const size    = this.p.byteLength;
        this.riffHead = this.readString(ftell, 4);ftell+=4;
        this.fileSize = this.p.getUint32(ftell, true)  ;ftell+=4;
        this.waveHead = this.readString(ftell, 4);ftell+=4;
        var fmtHead   = this.readString(ftell, 4);ftell+=4;
        const formats = new Set(["fmt ","data","fact","cue ","LIST", "smpl"]);
        do {
            switch( fmtHead ){
                case "fmt ":
                    //header.format.
                    var chunkSize         = this.p.getUint32(ftell, true);ftell+=4;
                    var pos               = ftell;
                    this.wFormatTag       = this.p.getUint16(ftell, true);ftell+=2; //must be 1
                    this.ChannelCount     = this.p.getUint16(ftell, true);ftell+=2;
                    this.SampleRate       = this.p.getUint32(ftell, true);ftell+=4;
                    this.dwAvgBytesPerSec = this.p.getUint32(ftell, true);ftell+=4;
                    this.wBlockAlign      = this.p.getUint16(ftell, true);ftell+=2;
                    this.BPS              = this.p.getUint16(ftell, true);ftell+=2;

                    if (this.wFormatTag == 17) //DVI IMA ADPCM
                    {
                        this.wcbsize = this.p.getUint16(ftell, true);ftell+=2;
                        this.wSamplesPerBlock = this.p.getUint16(ftell, true);ftell+=2;
                    }

                    // Unknown data at the end of the chunk
                    if( chunkSize > (ftell - pos) ){
                        ftell += chunkSize - (ftell - pos);
                    }
    
                    // Padding so the next chunk starts on an even byte
                    if( chunkSize & 1 ){
                        ftell+=1;
                    }
                    if(size == ftell){
                        fmtHead = "";
                        break; 
                    }
                    fmtHead   = this.readString(ftell, 4);ftell+=4;
                    break;
                case "data":
                    this.DatachunkSize = this.p.getUint32(ftell, true);ftell+=4;
                    var arrayType: (Int8ArrayConstructor|Int16ArrayConstructor|Int32ArrayConstructor) = Int8Array;
                    // Parse the samples of the data
                    if( ((this.BPS != 8) && (this.BPS != 16) && (this.BPS != 32)) 
                        || (this.DatachunkSize % this.wBlockAlign != 0) )
                    {
                        // Unsupported storage method used
                        ftell+=this.DatachunkSize;
                        // Padding so the next chunk starts on an even byte
                        if( (this.DatachunkSize & 1) && (ftell < size) ){
                            ftell+=1;
                        }
                        if(size == ftell){
                            fmtHead = "";
                            break; 
                        }
                        fmtHead   = this.readString(ftell, 4);ftell+=4;
                    }  else  {
                        if( (this.ChannelCount == 1) && (this.BPS == 8) )
                        {
                            // Define an array of 8-bit samples - common case
                            this.width = 1;
                            arrayType = Int8Array;
                            this.numOfSamples = this.DatachunkSize / this.width;
                            this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                            this.SampleCount = this.numSamplesPerChanel;
                        }
                        else if( (this.ChannelCount == 1) && (this.BPS == 16) )
                        {
                            // Define an array of 16-bit samples - common case
                            this.width = 2;
                            arrayType = Int16Array;
                            this.numOfSamples = this.DatachunkSize / this.width;
                            this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                            this.SampleCount = this.numSamplesPerChanel;
                        }
                        else if( (this.ChannelCount == 1) && (this.BPS == 32) )
                        {
                            // Define an array of 32-bit samples - common case
                            this.width = 4;
                            arrayType = Int32Array;
                            this.numOfSamples = this.DatachunkSize / this.width;
                            this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                            this.SampleCount = this.numSamplesPerChanel;
                        }
                        else
                        {
                            for(let i=0;i<(this.DatachunkSize / this.wBlockAlign);i++){
                                if( this.BPS == 8 ){
                                    this.numOfSamples = this.DatachunkSize;
                                    this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                                    this.SampleCount = this.numSamplesPerChanel;
                                } else if( this.BPS == 16 ){
                                    this.width = 2;
                                    arrayType = Int16Array;
                                    this.numOfSamples = this.DatachunkSize / this.width;
                                    this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                                    this.SampleCount = this.numSamplesPerChanel;
                                } else if( this.BPS == 32 ){
                                    this.width = 4;
                                    arrayType = Int32Array;
                                    this.numOfSamples = this.DatachunkSize / this.width;
                                    this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                                    this.SampleCount = this.numSamplesPerChanel;
                                }
                            }
                        }
    
                        const bufferAudio = this.p.buffer.slice(ftell,ftell+this.DatachunkSize);
                        
                        ftell+=this.DatachunkSize;

                        const brA = new DataView(bufferAudio);

                        var ftell2 = 0;

                        var channelsData = Array.from({ length: this.ChannelCount }, () => new arrayType(this.numSamplesPerChanel));
    
                        for (let i = 0; i <  this.numSamplesPerChanel; i++) {
                            for (let k = 0; k < this.ChannelCount; k++) {
                                switch (this.width) {
                                    case 1:
                                        channelsData[k][i] = brA.getInt8(ftell2);ftell2+=1;
                                        break;
                                    case 2:
                                        channelsData[k][i] = brA.getInt16(ftell2,true);ftell2+=2;
                                        break;
                                    case 4:
                                        channelsData[k][i] = brA.getInt32(ftell2,true);ftell2+=4;
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }

                        this.Channels = channelsData;
    
                        // Padding so the next chunk starts on an even byte
                        if( (this.DatachunkSize & 1) && (ftell < size) ){
                            ftell+=1;
                        }
                        if(size == ftell){
                            fmtHead = "";
                            break; 
                        }
                        fmtHead   = this.readString(ftell, 4);ftell+=4;
                    }
                    break;
                case "fact":
                    var chunkSize = this.p.getUint32(ftell, true);ftell+=4;
                    /*var uncompressedSize =*/ this.p.getUint32(ftell, true);ftell+=4;
                    fmtHead   = this.readString(ftell, 4);ftell+=4;
                    break;
                case "cue ":
                    var chunkSize = this.p.getUint32(ftell, true);ftell+=4;
                    var pos = ftell;
                    this.dwCuePoints = this.p.getUint32(ftell, true);ftell+=4;
                    this.Points = [];
                    for(let i=0;i<(this.dwCuePoints);i++){
                        this.READPOINTS(ftell);ftell+=24;
                    }
                    if( chunkSize > (ftell - pos) ){
                        ftell+= chunkSize - (ftell - pos) ;
                    }
                    if(size == ftell){
                        fmtHead = "";
                        break; 
                    }
                    fmtHead   = this.readString(ftell, 4);ftell+=4;
                    break;
                case "LIST":
                    var chunkSize = this.p.getUint32(ftell, true);ftell+=4;
                    var pos = ftell;
                    this.LISTChunkType = this.readString(ftell, 4);ftell+=4;
                    var size2;
                    while( ftell - pos < chunkSize ) {
                        ftell+=4;
                        size2 = this.p.getUint32(ftell, true);ftell+=4;
                        ftell+=4;
                        if  (ftell - pos + size2 <= chunkSize){
                            ftell+=4;
                            ftell+=4;
                            ftell+=4;
                            // Padding so the next chunk starts on an even byte
                            if( (chunkSize & 1) && (ftell < size) ){
                                ftell+=1;
                            }
                        } else {
                            ftell+= chunkSize - (ftell - pos);       
                        }
                    }
                    if(size == ftell){
                        fmtHead = "";
                        break; 
                    }
                    fmtHead   = this.readString(ftell, 4);ftell+=4;
                    break;
                case "smpl":                
                    this.SampleChunkType   = this.readString(ftell, 4);ftell+=4;
                    var chunkSize          = this.p.getUint32(ftell, true);ftell+=4;
                    this.manufacturer      = this.p.getUint32(ftell, true);ftell+=4;
                    this.product           = this.p.getUint32(ftell, true);ftell+=4;
                    this.samplePeriod      = this.p.getUint32(ftell, true);ftell+=4;
                    this.MIDIUnityNote     = this.p.getUint32(ftell, true);ftell+=4;
                    this.MIDIPitchFraction = this.p.getUint32(ftell, true);ftell+=4;
                    this.SMPTEFormat       = this.p.getUint32(ftell, true);ftell+=4;
                    this.SMPTEOffset       = this.p.getUint32(ftell, true);ftell+=4;
                    this.NumSampleLoops    = this.p.getUint32(ftell, true);ftell+=4;
                    this.SampleData        = this.p.getUint32(ftell, true);ftell+=4;
                    if(this.NumSampleLoops){
                        this.loops = [];
                        this.Looping = true;
                        for(let i = 0; i < this.NumSampleLoops; i++){
                            const cmd = this.SAMPLELOOP(ftell);ftell+=24;
                            this.LoopStart = cmd.start;
                            this.LoopEnd  = cmd.end;
                            this.loops.push(cmd);
                        }
                    }
                    if(size == ftell){
                        fmtHead = "";
                        break; 
                    }
                    fmtHead   = this.readString(ftell, 4);ftell+=4;
                    break;
                default:
                    var chunkSize = this.p.getUint32(ftell, true);ftell+=4;
                    ftell+=chunkSize;
                    if(size == ftell){
                        fmtHead = "";
                        break; 
                    }
                    fmtHead   = this.readString(ftell, 4);ftell+=4;
                    // Unknown chunk
                    break;
            }
        } while (formats.has(fmtHead));

        if( this.SampleRate &&
            this.ChannelCount &&
            this.BPS && 
            this.DatachunkSize
            ){
                const bytesPerSample = this.BPS / 8;
                const fileSizeInBytes = this.DatachunkSize;
                const totalSamples = fileSizeInBytes / bytesPerSample / this.ChannelCount;
                this.durationInSeconds = totalSamples / this.SampleRate;
        };

    }
    private readString(offset:number,length:number){
        let str = [];
        for (let i = offset; i < offset+length; i++) {
            const charCode = this.p.getUint8(i);
            const str2 = String.fromCharCode(charCode);
            str.push(str2);
        }
        const finalStr = str.join("")
        return finalStr;
    }

    private SAMPLELOOP(ftell:number){
        const obj: SAMPLELOOP = {
            loopID: 0,
            type: 0,
            start: 0,
            end: 0,
            fraction: 0,
            loopTimes: 0
        };
        obj.loopID    = this.p.getUint32(ftell, true);ftell+=4;
        obj.type      = this.p.getUint32(ftell, true);ftell+=4;
        obj.start     = this.p.getUint32(ftell, true);ftell+=4;
        obj.end       = this.p.getUint32(ftell, true);ftell+=4;
        obj.fraction  = this.p.getUint32(ftell, true);ftell+=4;
        obj.loopTimes = this.p.getUint32(ftell, true);ftell+=4;
        return obj;
    };

    private READPOINTS(ftell:number){
        const point:POINT = {
            dwIdentifier: 0,
            dwPosition: 0,
            fccChunk: "",
            dwChunkStart: 0,
            dwBlockStart: 0,
            dwSampleOffset: 0
        };
        point.dwIdentifier   = this.p.getInt32(ftell, true);ftell+=4;
        point.dwPosition     = this.p.getInt32(ftell, true);ftell+=4;
        point.fccChunk       = this.readString(ftell, 4);ftell+=4;
        point.dwChunkStart   = this.p.getInt32(ftell, true);ftell+=4;
        point.dwBlockStart   = this.p.getInt32(ftell, true);ftell+=4;
        point.dwSampleOffset = this.p.getInt32(ftell, true);ftell+=4;
        this.Points.push(point);
    }
};