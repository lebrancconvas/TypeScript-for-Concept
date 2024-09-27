import { Memory } from "./memory";
import type { MemoryLike } from "~/@types/components";
import type { Uint8, Uint16 } from "~/@types/bits";

export class Bus {
  RAM: MemoryLike;

  constructor() {
    this.RAM = Memory.create(64 * (2 ** 10)); // RAM: 64 KiloBytes (64 KBs)
  }

  write(address: Uint16, data: Uint8) {
    if(address >= 0x0000 && address <= 0xFFFF) {
      this.RAM.setUint8(address, data);
    }
  }

  read(address: Uint16, isReadOnly: boolean) {
    if(address >= 0x0000 && address <= 0xFFFF) {
      return this.RAM.getUint8(address);
    }

    return 0x00;
  }
};
