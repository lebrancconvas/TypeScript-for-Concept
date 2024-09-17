const buff = new ArrayBuffer(20);
const data = new DataView(buff);
data.setUint16(0, 0x0102, true);

console.log(data);
