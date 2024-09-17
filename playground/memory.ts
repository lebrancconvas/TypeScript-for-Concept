const createMemory = (size: number) => {
  let buffer = new ArrayBuffer(size);
  let dataView = new DataView(buffer);

  return dataView;
};

const registers = createMemory(20);

registers.setUint16(0, 0x0002);
console.log(registers);

registers.setUint16(2, 0x0004);
console.log(registers);

registers.setUint16(4, 0x0006);
console.log(registers);

registers.setUint16(6, 0x0008);
console.log(registers);

registers.setUint16(8, 0x000a);
console.log(registers);
