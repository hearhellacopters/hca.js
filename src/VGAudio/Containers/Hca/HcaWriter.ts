import HCAInfo from "../../Codecs/CriHca/HcaInfo";
import HCAFormat from "../../Formats/CriHca/CriHcaFormat";
import BitWriter from "../../Utilities/BitWriter";
import Crc16 from "../../Utilities/Crc16";

export default class HCAWriter{
    Hca!: HCAInfo;
    AudioData!: Uint8Array[];
    Version = 0x0200;
    Crc = Crc16;
    key1: any;
    key2: any;
    subkey: any;
    get HeaderSize(){
        return this.Hca.HeaderSize;
    }
    get FileSize(){
        return this.HeaderSize + this.Hca.FrameSize * this.Hca.FrameCount;
    }

    constructor(key1?: any, key2?: any, subkey?: any){
        this.key1 = key1;
        this.key2 = key2;
        this.subkey = subkey;
    }

    SetupWriter(audio:HCAFormat)
    {

        this.Hca = audio.Hca;
        this.AudioData = audio.AudioData;

        const stream = new Uint8Array(this.FileSize);
        return this.WriteStream(stream);
    }

    WriteStream(stream: Uint8Array)
    {
        const writer = new BitWriter(stream);

        this.WriteHeader(writer);
        this.WriteData(writer);
        
        return writer.Buffer;
    }

    WriteHeader(writer: BitWriter)
    {
        this.WriteHcaChunk(writer);
        this.WriteFmtChunk(writer);
        this.WriteCompChunk(writer);
        this.WriteLoopChunk(writer);
        this.WriteCiphChunk(writer);
        this.WriteRvaChunk(writer);

        if (this.Hca.Comment == "")
        {
            this.WritePadChunk(writer);
        }
        else
        {
            this.WriteCommChunk(writer);
        }

        writer.Position = 0;
        var header = new Uint8Array(this.HeaderSize - 2);
        writer.Read(header, 0, header.length);
        var crc16 = this.Crc.calc(header, header.length);
        writer.Write(crc16,16);
    }

    WriteCommChunk(writer: BitWriter)
    {
        this.WriteChunkId(writer, "comm\0");
        writer.WriteString(this.Hca.Comment);
        writer.Write(0,8);
    }

    WritePadChunk(writer: BitWriter)
    {
        this.WriteChunkId(writer, "pad");
    }

    WriteRvaChunk(writer: BitWriter)
        {
            var volume = this.Hca.Volume;
            // ReSharper disable once CompareOfFloatsByEqualityOperator
            if (volume != 1)
            {
                this.WriteChunkId(writer, "rva\0");
                const float = new Float32Array([this.Hca.Volume]).buffer
                const uint = new Uint8Array(float);
                for (let i = 0; i < uint.length; i++) {
                    const element = uint[i];
                    writer.Write(element, 8);
                }
            }
        }

    WriteCiphChunk(writer: BitWriter)
    {
        this.WriteChunkId(writer, "ciph");
        writer.Write(this.Hca.EncryptionType, 16);
    }

    WriteLoopChunk(writer: BitWriter)
    {
        if (!this.Hca.Looping) return;

        this.WriteChunkId(writer, "loop");
        writer.Write(this.Hca.LoopStartFrame, 32);
        writer.Write(this.Hca.LoopEndFrame, 32);
        writer.Write(this.Hca.PreLoopSamples, 16);
        writer.Write(this.Hca.PostLoopSamples, 16);
    }

    WriteCompChunk(writer: BitWriter)
    {
        this.WriteChunkId(writer, "comp");
        writer.Write(this.Hca.FrameSize, 16);
        writer.Write(this.Hca.MinResolution, 8);
        writer.Write(this.Hca.MaxResolution, 8);
        writer.Write(this.Hca.TrackCount, 8);
        writer.Write(this.Hca.ChannelConfig, 8);
        writer.Write(this.Hca.TotalBandCount, 8);
        writer.Write(this.Hca.BaseBandCount, 8);
        writer.Write(this.Hca.StereoBandCount, 8);
        writer.Write(this.Hca.BandsPerHfrGroup, 8);
        writer.Write(0, 16);
    }

    WriteFmtChunk(writer: BitWriter)
    {
        this.WriteChunkId(writer, "fmt\0");
        writer.Write(this.Hca.ChannelCount, 8);

        // Sample Rate is 24-bit
        writer.Write(this.Hca.SampleRate >> 16, 8);
        writer.Write(this.Hca.SampleRate, 16);

        writer.Write(this.Hca.FrameCount, 32);
        writer.Write(this.Hca.InsertedSamples, 16);
        writer.Write(this.Hca.AppendedSamples, 16);
    }

    WriteHcaChunk(writer: BitWriter)
    {
        this.WriteChunkId(writer, "HCA\0");
        writer.Write(this.Version, 16);
        writer.Write(this.HeaderSize, 16);
    }

    WriteChunkId(writer: BitWriter, value: string)
    {
        let te = new TextEncoder();
        var bytes = te.encode(value);

        if (this.key1 != null)
        {
            for (let i = 0; i < bytes.length; i++)
            {
                if (bytes[i] != 0) bytes[i] |= 0x80;
                writer.Write(bytes[i], 8);
            }
        } else {
            writer.WriteString(value);
        }
        
    }

    WriteData(writer: BitWriter)
    {
        for (let i = 0; i < this.Hca.FrameCount; i++)
        {
            for (let z = 0; z < this.AudioData[i].length; z++) { //this.Hca.FrameSize length
                const element = this.AudioData[i][z];
                writer.Write(element, 8);
            }
        }
    }
}