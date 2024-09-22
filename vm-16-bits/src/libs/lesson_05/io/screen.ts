const moveTo = (x: number, y: number) => {
  process.stdout.write(`\x1b[${y};${x}H`);
};

export const screenDevice = () => {
  return {
    getUint16: () => 0,
    getUint8: () => 0,
    setUint16: (memoryAddress: number, data: number) => {
      const characterValue = data & 0x00ff;
      const x = (memoryAddress % 16) + 1;
      const y = Math.floor(memoryAddress / 16) + 1;
      moveTo(x * 2, y);
      const character = String.fromCharCode(characterValue);
      process.stdout.write(character);
    },
    setUint8(memoryAddress: number, data: number) {}
  }
};
