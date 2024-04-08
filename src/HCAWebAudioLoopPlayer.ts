import HCAInfo from "./VGAudio/Codecs/CriHca/HcaInfo";
import HCAWorker from "./worker/HCAWorker";
import {suspendAudioCtxIfUnlocked} from'./VGAudio/Utilities/Helpers';

// WebAudio-based loop player
export default class HCAWebAudioLoopPlayer {
    get unlocked(): boolean {
        return this._unlocked;
    }
    private _unlocked: boolean;

    private bufSrcStarted = false;
    private closed = false;

    playInBackground = false; // FIXME
    private requestedToPlay = false;

    private readonly audioCtx: AudioContext;
    private readonly info: HCAInfo;
    private readonly bufSrc: AudioBufferSourceNode;
    private readonly gainNode: GainNode;

    get volume(): number {
        return this.gainNode.gain.value;
    }
    set volume(val: number) {
        if (isNaN(val)) return;
        if (val > 1.0) val = 1.0;
        if (val < 0) val = 0;
        this.gainNode.gain.value = val;
    }

    private readonly visibilityChangeListener = (): void => {
        switch (document.visibilityState) {
            case 'visible':
                if (this.requestedToPlay) {
                    this._play();
                }
                break;
            case 'hidden':
            default:
                if (!this.playInBackground) {
                    this._pause();
                }
        }
    }

    private constructor(info: HCAInfo, bufSrc: AudioBufferSourceNode, audioCtx: AudioContext, unlocked: boolean,
        gainNode: GainNode, volume: number) {
        this.info = info;
        this.bufSrc = bufSrc;
        this.audioCtx = audioCtx;
        this._unlocked = unlocked;
        this.gainNode = gainNode;
        this.volume = volume;

        document.addEventListener('visibilitychange', this.visibilityChangeListener);
    }
    static async create(decrypted: Uint8Array, worker: HCAWorker, volume = 100): Promise<HCAWebAudioLoopPlayer> {
        const info = new HCAInfo(decrypted);
        if (info.cipher != 0) throw new Error("only decrypted hca is accepted");

        const audioCtx = new AudioContext({
            sampleRate: info.format.samplingRate,
        });
        const wav = await worker.decode(decrypted, 16); // first

        const unlocked = await suspendAudioCtxIfUnlocked(audioCtx);

        const buffer = await audioCtx.decodeAudioData(wav.buffer);

        const bufSrc = audioCtx.createBufferSource();
        bufSrc.buffer = buffer;
        if (info.loop != null && info.loop.end > info.loop.start) {
            bufSrc.loopStart = info.loopStartTime;
            bufSrc.loopEnd = info.loopEndTime;
            bufSrc.loop = true;
        }

        const gainNode = audioCtx.createGain();
        bufSrc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        return new HCAWebAudioLoopPlayer(info, bufSrc, audioCtx, unlocked, gainNode, volume);
    }

    // not supposed to be used directly
    private _play(): void {
        if (this.audioCtx.state !== "running") this.audioCtx.resume();
        if (!this.bufSrcStarted) {
            this.bufSrc.start();
            this.bufSrcStarted = true;
        }
        // mark as unlocked
        if (!this._unlocked) {
            this._unlocked = true;
            console.warn(`audio context for sampleRate=${this.audioCtx.sampleRate} is now resumed/unlocked`);
        }
    }
    private _pause(): void {
        if (this.audioCtx.state !== "running") return;
        this.audioCtx.suspend();
    }

    play(): void {
        this.requestedToPlay = true;
        this._play();
    }
    pause(): void {
        this.requestedToPlay = false;
        this._pause();
    }
    async stop(): Promise<void> {
        if (!this._unlocked) throw new Error("audio context is not unlocked, cannot stop and destroy");
        if (this.closed) return;

        try {
            document.removeEventListener('visibilitychange', this.visibilityChangeListener);
        } catch (e) {
            console.error(e);
        }

        this.requestedToPlay = false;
        this.bufSrc.disconnect();
        await this.audioCtx.close();
        this.closed = true;
    }
}