export class Memory {
  static create(size: number) {
    const arrayBuffer = new ArrayBuffer(size);
    const dataView = new DataView(arrayBuffer);
    return dataView;
  }
};

