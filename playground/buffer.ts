const buffer = new ArrayBuffer(8);
const memory = new Uint8Array(buffer);
memory[0] = 0b00010010;
memory[1] = 0b10100100;
memory[2] = 0b11000111;

console.log(memory);
