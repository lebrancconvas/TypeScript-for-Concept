let hexSlot = 2;
let binSlot = hexSlot * 4;
let num = 50;

let hex = num.toString(16).padStart(hexSlot, '0');

let bin = num.toString(2).padStart(binSlot, '0');

console.log({ hex: `0x${hex}`, bin: `0b${bin}` });
