export interface Device {
  getUint16: (memoryAddress: number) => number;
  getUint8: (memoryAddress: number) => number;
  setUint16: (memoryAddress: number, data: number) => void;
  setUint8: (memoryAddress: number, data: number) => void;
};

export interface MemoryRegion {
  device: Device;
  startAddress: number;
  endAddress: number;
  remap: boolean;
};
