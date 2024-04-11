export function DivideByRoundUp(value: number, divisor: number): number {
  return Math.ceil(value / divisor) >> 0;
}

export function GetHighNibble(value: number): number {
  if (value > 0xff) throw new Error();
  if (value < -0x80) throw new Error();
  return (value >>> 4) & 0xF;
}

export function GetLowNibble(value: number): number {
  if (value > 0xff) throw new Error();
  if (value < -0x80) throw new Error();
  return value & 0xF;
}

const SignedNibbles = [0, 1, 2, 3, 4, 5, 6, 7, -8, -7, -6, -5, -4, -3, -2, -1] as const;

export function GetHighNibbleSigned(value: number) {
  if (value > 0xff) throw new Error();
  if (value < -0x80) throw new Error();
  return SignedNibbles[(value >>> 4) & 0xF];
}

export function GetLowNibbleSigned(value: number) {
  if (value > 0xff) throw new Error();
  if (value < -0x80) throw new Error();
  return SignedNibbles[value & 0xF];
}

export function CombineNibbles(high: number, low: number) {
  return ((high << 4) | (low & 0xF)) & 0xFF;
}

export function GetNextMultiple(value: number, multiple: number): number {
  if (multiple <= 0) {
    return value;
  }

  if (value % multiple == 0) {
    return value;
  }

  return value + multiple - value % multiple;
}

export function SignedBitReverse32(value: number): number {
  if (value > 0xffffffff) throw new Error();
  if (value < -0x80000000) throw new Error();
  const val = new Uint32Array([value]);
  val[0] = ((val[0] & 0xaaaaaaaa) >>> 1) | ((val[0] & 0x55555555) << 1);
  val[0] = ((val[0] & 0xcccccccc) >>> 2) | ((val[0] & 0x33333333) << 2);
  val[0] = ((val[0] & 0xf0f0f0f0) >>> 4) | ((val[0] & 0x0f0f0f0f) << 4);
  val[0] = ((val[0] & 0xff00ff00) >>> 8) | ((val[0] & 0x00ff00ff) << 8);
  return (val[0] >>> 16) | (val[0] << 16);
}

export function UnsignedBitReverse32(value: number): number {
  return SignedBitReverse32(value) >>> 0;
}

export function UnsignedBitReverse32Trunc(
  value: number,
  bitCount: number,
): number {
  return UnsignedBitReverse32(value) >>> (32 - bitCount);
}

export function SignedBitReverse32Trunc(
  value: number,
  bitCount: number,
): number {
  return UnsignedBitReverse32Trunc(value >>> 0, bitCount);
}

export function BitReverse8(value: number): number {
  if (value > 0xff) throw new Error();
  if (value < -0x80) throw new Error();
  value >>>= 0;
  value = ((value & 0xaa) >>> 1) | ((value & 0x55) << 1);
  value = ((value & 0xcc) >>> 2) | ((value & 0x33) << 2);
  return (((value & 0xf0) >>> 4) | ((value & 0x0f) << 4)) >>> 0;
}

export function Clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

export function DebugAssert(condition: any) {
  if (!condition) throw new Error("DebugAssert failed");
}

export const suspendAudioCtxIfUnlocked = async (audioCtx: AudioContext): Promise<boolean> => {
  // suspend audio context for now
  // in apple webkit it's already suspended & calling suspend yet again will block
  switch (audioCtx.state) {
      case "running":
          await audioCtx.suspend();
          return true;
      case "suspended":
          console.warn(`audio context for sampleRate=${audioCtx.sampleRate} is suspended/locked,`
              + ` which can only be resumed/unlocked by UI event.`);
          return false;
      default:
          throw new Error(`audio context is neither running nor suspended`);
  }
}

export function arrayCopy(sourceArray: (Int8Array | Int16Array | Int32Array| Float64Array), sourceIndex: number, destinationArray: (Int8Array | Int16Array | Int32Array| Float64Array), destinationIndex: number, length: number) {
  if (length === undefined) {
      length = Math.min(sourceArray.length - sourceIndex, destinationArray.length - destinationIndex);
  }
  for (let i = 0; i < length; i++) {
      destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
  }
};

export function arrayClear(array: (Int8Array | Int16Array | Int32Array| Float64Array), start: number, length: number) {
  if (start === undefined) {
      start = 0;
  }
  if (length === undefined) {
      length = array.length;
  }
  for (let i = start; i < start + length; i++) {
      array[i] = 0; // Set elements to 0
  }
};

export function printArray(array: (Int8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float64Array)){
  function i2hex(i:number) {
      return ('0' + i.toString(16)).slice(-2).toUpperCase();
  }
  const buff = new Uint8Array(array.buffer);
  console.log(Array.from(buff).map(i2hex).join('-'))
}