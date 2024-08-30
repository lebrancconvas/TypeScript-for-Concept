export function createMemory(byteInSize: number) {
  const buffer = new ArrayBuffer(byteInSize);
  const dataView = new DataView(buffer);

  return dataView;

};
