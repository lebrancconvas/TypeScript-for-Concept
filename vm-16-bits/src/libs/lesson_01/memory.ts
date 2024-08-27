export const createMemory = (size: number) => {
  const arrayBuffer = new ArrayBuffer(size);
  const dataView = new DataView(arrayBuffer);
  
  return dataView;
};
