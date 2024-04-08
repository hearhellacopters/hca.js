const HCAKnownKeys: [number, number][] = [
    // [lower 32 bits, higher 32 bits]
    // eg. 6615518E8ECED447 => [0x8ECED447, 0x6615518E]

    // source: https://github.com/Thealexbarney/VGAudio/blob/master/docs/audio-formats/hca/encryption-keys.md
    [0x000004C8, 0x00000000], // One Piece Treasure Cruise (iOS/Android)
    [0x00000978, 0x00000000], // Idol Connect (iOS/Android)
    [0x000022CE, 0x00000000], // BanG Dream! Girls Band Party! (iOS/Android)
    [0x00003039, 0x00000000], // Fate/Grand Order (iOS/Android) base assets
    [0x001D149A, 0x00000000], // One Piece Dance Battle (iOS/Android)
    [0x009134FC, 0x00000000], // Tales of the Rays (iOS/Android)
    [0x012C9A53, 0x00000000], // Jojo All Star Battle (PS3)
    [0x012EBCCA, 0x00000000], // Derby Stallion Masters (iOS/Android)
    [0x012FCFDF, 0x00000000], // Sonic Runners (iOS/Android)
    [0x01395C51, 0x00000000], // Puella Magi Madoka Magica Side Story: Magia Record (iOS/Android)<br/>Hortensia Saga 0000000002B99F1A // Raramagi (iOS/Android)
    [0x0E62BEF0, 0x00000000], // Bad Apple Wars (Vita)
    [0x0E88473C, 0x00000000], // Koi to Senkyo to Chocolate Portable (PSP)
    [0x49913556, 0x00000000], // Ro-Kyu-Bu! Naisho no Shutter Chance (Vita)
    [0x77EDA13A, 0x00000000], // Custom Drive (PSP)
    [0x77EDF21C, 0x00000000], // Ro-Kyu-Bu! Himitsu no Otoshimono (PSP)
    [0x7235CB29, 0x0000000B], // Skylock - Kamigami to Unmei no Itsutsuko (iOS)
    [0x222AAA84, 0x00000497], // For Whom the Alchemist Exists (iOS/Android)
    [0xA6AD6125, 0x00001B85], // SD Gundam Strikers (iOS/Android)
    [0xF27E3B22, 0x00003657], // Idolm@ster Cinderella Stage (iOS/Android)
    [0x97978A96, 0x0000968A], // Super Robot Wars X-Omega (iOS/Android)
    [0x95356C72, 0x0002354E], // Azur Lane (iOS/Android)
    [0xBC731A85, 0x0002B875], // Idolm@ster Million Live (iOS/Android)
    [0x0DC57F48, 0x0011DCDD], // Grimoire - Shiritsu Grimoire Mahou Gakuen (iOS/Android)
    [0x1024ADE9, 0x00189DFB], // Tokyo Ghoul: Re Invoke (iOS/Android)
    [0x634B5F07, 0x002055C8], // The Tower of Princess (iOS/Android)
    [0xA11CCFB0, 0x00688884], // Kamen Rider Battle Rush (iOS/Android)
    [0x8D0C10FD, 0x00A06A0B], // Ikemen Vampire - Ijin-tachi to Koi no Yuuwaku (iOS/Android)
    [0xCC554639, 0x00DBE1AB], // Old Phantasy Star Online 2
    [0x5990FB5E, 0x02051AF2], // Fallen Princess (iOS/Android)
    [0xF5816A2A, 0x29AFE911], // Kurokishi to Shiro no Maou (iOS/Android)
    [0x83653699, 0x438BF1F8], // Yuyuyui (iOS/Android) *unconfirmed
    [0xB8E6C6D2, 0x43E4EA62], // World Chain (iOS/Android)
    [0xC3091366, 0x7CEC81F7], // Diss World (iOS/Android)
    [0x92EBF464, 0x7E896318], // Fate/Grand Order (iOS/Android) download assets *unconfirmed
    [0x30DBE1AB, 0xCC554639], // Phantasy Star Online 2
    [0xE0748978, 0xCF222F1F], // Default key from CRI
    [0x343D0000, 0xDB5B61B8], // Schoolgirl Strikers: Twinkle Melodies (iOS/Android)
    [0xAB414BA1, 0xFDAE531A], // Tokyo 7th Sisters (iOS/Android) *unconfirmed
    [0xFFFFFFFF, 0xFFFFFFFF], // Tekken Mobile (iOS/Android)

    // source: https://github.com/vgmstream/vgmstream/blob/36f4dfeab41adf8f8ff08477dc062f8c76b003d8/src/meta/hca_keys.h#L1059
    [0x8ECED447, 0x6615518E], // Heaven Burns Red (Android)
];

class HCACipher {
    static readonly defKey1 = 0x01395C51;
    static readonly defKey2 = 0x00000000;
    private cipherType = 0;
    private encrypt = false;
    private key1buf = new ArrayBuffer(4);
    private key2buf = new ArrayBuffer(4);
    private dv1: DataView;
    private dv2: DataView;
    private _table = new Uint8Array(256);
    private init1(): void {
        for (let i = 1, v = 0; i < 0xFF; i++) {
            v = (v * 13 + 11) & 0xFF;
            if (v == 0 || v == 0xFF) v = (v * 13 + 11) & 0xFF;
            this._table[i] = v;
        }
        this._table[0] = 0;
        this._table[0xFF] = 0xFF;
    }
    private init56(): void {
        let key1 = this.dv1.getUint32(0, true);
        let key2 = this.dv2.getUint32(0, true);
        if (!key1) key2--;
        key1--;
        this.dv1.setUint32(0, key1, true);
        this.dv2.setUint32(0, key2, true);
        let t1 = this.getBytesOfTwoKeys();
        let t2 = new Uint8Array([
            t1[1], t1[1] ^ t1[6], t1[2] ^ t1[3],
            t1[2], t1[2] ^ t1[1], t1[3] ^ t1[4],
            t1[3], t1[3] ^ t1[2], t1[4] ^ t1[5],
            t1[4], t1[4] ^ t1[3], t1[5] ^ t1[6],
            t1[5], t1[5] ^ t1[4], t1[6] ^ t1[1],
            t1[6]
        ]);
        let t3 = new Uint8Array(0x100);
        let t31 = new Uint8Array(0x10);
        let t32 = new Uint8Array(0x10);
        this.createTable(t31, t1[0]);
        for (let i = 0, t = 0; i < 0x10; i++) {
            this.createTable(t32, t2[i]);
            let v = t31[i] << 4;
            for (let j = 0; j < 0x10; j++) {
                t3[t++] = v | t32[j];
            }
        }
        for (let i = 0, v = 0, t = 1; i < 0x100; i++) {
            v = (v + 0x11) & 0xFF;
            let a = t3[v];
            if (a != 0 && a != 0xFF) this._table[t++] = a;
        }
        this._table[0] = 0;
        this._table[0xFF] = 0xFF;
    }
    private createTable(r: Uint8Array, key: number): void {
        let mul = ((key & 1) << 3) | 5;
        let add = (key & 0xE) | 1;
        let t = 0;
        key >>= 4;
        for (let i = 0; i < 0x10; i++) {
            key = (key * mul + add) & 0xF;
            r[t++] = key;
        }
    }
    invertTable(): HCACipher {
        // actually, this method switch the mode between encrypt/decrypt
        this.encrypt = !this.encrypt;
        let _old_table = this._table.slice(0);
        let bitMap = new Uint16Array(16);
        for (let i = 0; i < 256; i++) {
            // invert key and value
            let key = _old_table[i];
            let val = i;
            // check for inconsistency
            let higher4 = key >> 4 & 0x0F;
            let lower4 = key & 0x0F;
            let flag = 0x01 << lower4;
            if (bitMap[higher4] & flag) throw new Error("_table is not bijective");
            // update table
            this._table[key] = val;
        }
        return this;
    }
    getType(): number {
        return this.cipherType;
    }
    getEncrypt(): boolean {
        return this.encrypt;
    }
    getBytesOfTwoKeys(): Uint8Array {
        let buf = new Uint8Array(8);
        buf.set(new Uint8Array(this.key1buf), 0);
        buf.set(new Uint8Array(this.key2buf), 4);
        return buf;
    }
    private static bigUintMultiplyLE(dv: DataView, factor: number): DataView {
        const result = new DataView(new ArrayBuffer(dv.byteLength + 4));
        factor = Math.trunc(factor);
        Array.from({ length: dv.byteLength }, (_, i) => factor * dv.getUint8(i))
            .forEach((v, i) => {
                v += result.getUint32(i, true);
                result.setUint32(i, v, true);
                v -= result.getUint32(i, true);
                if (v > 0) {
                    v /= 0x100000000;
                    for (let j = i + 4; j < result.byteLength; j++) {
                        v += result.getUint8(j);
                        result.setUint8(j, v);
                        v -= result.getUint8(j);
                        if (v > 0) v /= 0x100;
                        else break;
                    }
                }
            });
        return result;
    }
    static mixWithSubkey(key1: any, key2: any, subkey: any): { key1: number, key2: number } {
        // https://github.com/vgmstream/vgmstream/blob/84cfeaf993982b4245ce7593dcbb6816c5aee8bc/src/coding/hca_decoder.c#L313
        /*
            if (subkey) {
                keycode = keycode * ( ((uint64_t)subkey << 16u) | ((uint16_t)~subkey + 2u) );
            }
        */

        if (subkey == null) return { key1: key1, key2: key2 };

        key1 = HCACipher.parseKey(key1);
        key2 = HCACipher.parseKey(key2);
        subkey = HCACipher.parseKey(subkey);

        const keydv = new DataView(new ArrayBuffer(8));
        keydv.setUint32(0, key1, true);
        keydv.setUint32(4, key2, true);

        const subkeydv = new DataView(new ArrayBuffer(4));
        subkeydv.setUint16(2, subkey, true);
        if (subkeydv.getUint16(2) == 0) return { key1: key1, key2: key2 }; //unchanged
        subkeydv.setUint16(0, ~subkeydv.getUint16(2, true) + 2, true);
        subkey = subkeydv.getUint32(0, true);

        const mixedkeydv = this.bigUintMultiplyLE(keydv, subkey);

        key1 = mixedkeydv.getUint32(0, true);
        key2 = mixedkeydv.getUint32(4, true);

        return { key1: key1, key2: key2 };
    }
    setKeys(key1: number, key2: number): HCACipher {
        this.dv1.setUint32(0, key1, true);
        this.dv2.setUint32(0, key2, true);
        this.init56();
        this.cipherType = 0x38;
        return this;
    }
    setToDefKeys(): HCACipher {
        return this.setKeys(HCACipher.defKey1, HCACipher.defKey2);
    }
    setToNoKey(): HCACipher {
        this.init1();
        this.cipherType = 0x01;
        return this;
    }
    mask(block: Uint8Array, offset: number, size: number): void {
        // encrypt or decrypt block data
        for (let i = 0; i < size; i++) block[offset + i] = this._table[block[offset + i]];
    }
    static isHCAHeaderMasked(hca: Uint8Array): boolean {
        // fast & dirty way to determine whether encrypted, not recommended
        if (hca[0] & 0x80 || hca[1] & 0x80 || hca[2] & 0x80) return true;
        else return false;
    }
    static parseKey(key: any): number {
        switch (typeof key) {
            case "number":
                return key;
            case "string":
                // avoid ambiguity: always treat as hex
                if (!key.match(/^0x/)) key = "0x" + key;
                key = parseInt(key);
                if (isNaN(key)) throw new Error("cannot parse as integer");
                return key;
            case "object":
                // avoid endianness ambiguity: only accepting Uint8Array, then read as little endian
                if (key instanceof Uint8Array && key.byteLength == 4) {
                    return new DataView(key.buffer, key.byteOffset, key.byteLength).getUint32(0, true);
                }
            default:
                throw new Error("can only accept number/hex string/Uint8Array[4]");
        }
    }
    constructor(key1?: any, key2?: any) {
        this.dv1 = new DataView(this.key1buf);
        this.dv2 = new DataView(this.key2buf);
        if (key1 == null) throw new Error("no keys given. use \"defaultkey\" if you want to use the default key");
        switch (key1) {
            case "none":
            case "nokey":
            case "noKey":
            case "no key":
            case "no_Key":
                this.setToNoKey();
                break;
            case "defaultkey":
            case "defaultKey":
            case "default key":
            case "default_key":
                this.setToDefKeys();
                break;
            default:
                key1 = HCACipher.parseKey(key1);
                if (key2 == null) {
                    key2 = 0;
                } else {
                    key2 = HCACipher.parseKey(key2);
                }
                this.setKeys(key1, key2);
        }
    }
}

export default HCACipher;

export { HCAKnownKeys }
