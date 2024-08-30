import { registers } from "./register";

import type { Register } from "./@types";

export class CPU {
  mainMemory: DataView;
  registers: Register[];

  constructor(mainMemory: DataView) {
    this.mainMemory = mainMemory;
    this.registers = registers;
  }
}
