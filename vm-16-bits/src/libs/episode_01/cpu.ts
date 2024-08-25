import { createMemory } from "./memory";

export class CPU {
  memory: any;
  registerNames: string[];
  registers: DataView;
  registerMap: any;

  constructor(memory: any) {
    this.memory = memory;

    /**
     * ip: Instruction Pointer (Program Counter)
     * acc: Accumulator => Store the result from Mathematical Operations (We accumulate the value here)
     * r1, r2, r3, r4, r5, r6, r7, r8: General Purpose Registers
     */
    this.registerNames = [
      "ip", "acc",
      "r1", "r2", "r3", "r4",
      "r5", "r6", "r7", "r8"
    ];

    this.registers = createMemory(this.registerNames.length * 2);

    /**
     *
     * Register Map:
     * ip: 0
     * acc: 2
     * r1: 4
     * r2: 6
     * r3: 8
     * r4: 10
     * r5: 12
     * r6: 14
     * r7: 16
     * r8: 18
     */
    this.registerMap = this.registerNames.reduce((map: any, name: any, i: number) => {
      map[name] = i * 2;
      return map;
    }, {});
  }

  getRegister(name: string): number {
    if(!(name in this.registerMap)) {
      throw new Error(`[ERROR] Not Found Register: '${name}'`);
    }

    return this.registers.getUint16(this.registerMap[name]);
  }

  setRegister(name: string, value: number) {
    if(!(name in this.registerMap)) {
      throw new Error(`[ERROR] Not Found Register: '${name}'`);
    }

    return this.registers.setUint16(this.registerMap[name], value);
  }
};
