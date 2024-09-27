import type { MemoryLike } from "~/@types/components";

export class Memory {
  static create(size: number): MemoryLike {
    const arrayBuffer = new ArrayBuffer(size);
    const dataView = new DataView(arrayBuffer);
    return dataView;
  }
};
