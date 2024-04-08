// https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/meta/awb.c#L13
export default class AWBArchive {
    readonly version: number;
    readonly offsetSize: number;
    readonly waveIdAlignment: number;
    readonly totalSubsongs: number;
    readonly offsetAlignment: number;
    readonly subkey: number;
    readonly hcaFiles: { waveID: number, file: Uint8Array }[];

    static isAWB(file: Uint8Array): boolean {
        const dv = new DataView(file.buffer, file.byteOffset, file.byteLength);
        const magic = 0x41465332; // "AFS2" in Uint32BE
        return dv.getUint32(0, false) == magic;
    }

    constructor(awb: Uint8Array) {
        if (!AWBArchive.isAWB(awb)) throw new Error(`not AWB archive`);
        const dv = new DataView(awb.buffer, awb.byteOffset, awb.byteLength);
        this.version = dv.getUint8(0x04);
        this.offsetSize = dv.getUint8(0x05);
        this.waveIdAlignment = dv.getUint16(0x06, true);
        this.totalSubsongs = dv.getInt32(0x08, true);
        this.offsetAlignment = dv.getUint16(0x0c, true);
        this.subkey = dv.getUint16(0x0e, true);

        let ftell = 0x10;

        this.hcaFiles = Array.from({ length: this.totalSubsongs }, () => {
            const offset = ftell;
            ftell += this.waveIdAlignment;
            return { waveID: dv.getUint16(offset, true) };
        }).map((o) => {
            const offset = ftell;
            ftell += this.offsetSize * 2;
            switch (this.offsetSize) {
                case 0x04:
                    return {
                        waveID: o.waveID,
                        offset: dv.getUint32(offset, true),
                        next: dv.getUint32(offset + this.offsetSize, true),
                    }
                case 0x02:
                    return {
                        waveID: o.waveID,
                        offset: dv.getUint16(offset, true),
                        next: dv.getUint16(offset + this.offsetSize, true),
                    }
                default:
                    throw new Error(`AWB: unknown offset size`);
            }
        }).map((o) => {
            // offset are absolute but sometimes misaligned (specially first that just points to offset table end)
            o.offset += (o.offset % this.offsetAlignment) ?
                this.offsetAlignment - (o.offset % this.offsetAlignment) : 0;
            o.next += (o.next % this.offsetAlignment) && o.next < awb.byteLength ?
                this.offsetAlignment - (o.next % this.offsetAlignment) : 0;
            return { waveID: o.waveID, file: awb.subarray(o.offset, o.next) };
        });
    }
}