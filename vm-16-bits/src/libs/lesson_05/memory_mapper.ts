import type { MemoryRegion, Device } from "./@types";

export class MemoryMapper {
  regions: MemoryRegion[];

  constructor() {
    this.regions = [];
  }

  map(device: Device, startAddress: number, endAddress: number, remap: boolean = true) {
    const region = { device, startAddress, endAddress, remap };
    this.regions.unshift(region);
    return () => this.regions.filter(r => r !== region);
  }

  findRegion(memoryAddress: number) {
    let region = this.regions.find(r => memoryAddress >= r.startAddress && memoryAddress <= r.endAddress);
    if(!region) {
      throw new Error(`[ERROR] No Memory Found at Address: 0x${memoryAddress.toString(16).padStart(4, '0')}`);
    }
    return region;
  }

  getUint16(memoryAddress: number) {
    const region = this.findRegion(memoryAddress);
    const finalAddress = region.remap ?
      memoryAddress - region.startAddress :
      memoryAddress;
    return region.device.getUint16(finalAddress);
  }

  getUint8(memoryAddress: number) {
    const region = this.findRegion(memoryAddress);
    const finalAddress = region.remap ?
      memoryAddress - region.startAddress :
      memoryAddress;
    return region.device.getUint8(finalAddress);
  }


  setUint16(memoryAddress: number, value: number) {
    const region = this.findRegion(memoryAddress);
    const finalAddress = region.remap ?
      memoryAddress - region.startAddress :
      memoryAddress;
    region.device.setUint16(finalAddress, value);
  }

  setUint8(memoryAddress: number, value: number) {
    const region = this.findRegion(memoryAddress);
    const finalAddress = region.remap ?
      memoryAddress - region.startAddress :
      memoryAddress;
    region.device.setUint8(finalAddress, value);
  }
};
