function bitToByte(bit: number): number {
  return bit / 8;
};

function byteToBit(byte: number): number {
  return byte * 8;
};

// Data Size of Primitive Types

const t = 0b0000_0000;
console.log(Boolean(t));

console.log(0x1f.toString(2).padStart(8, '0'));
