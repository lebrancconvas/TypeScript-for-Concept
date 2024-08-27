import { createMemory } from "./memory";
import { Instruction } from "./instruction";

export class CPU {
  memory: DataView;
  registerNames: string[];
  registers: DataView;
  registerMap: any;

  constructor(memory: DataView) {
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

  debug() {
    console.log('===== STEP =====');
    this.registerNames.forEach(name => {
      console.log(`${name}: 0x${this.getRegister(name).toString(16).padStart(4, '0')}`);
    });
    console.log('================\n');
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

  fetch() {
    const nextInstructionAddress = this.getRegister("ip");
    const instruction = this.memory.getUint8(nextInstructionAddress);
    this.setRegister("ip", nextInstructionAddress + 1);
    return instruction;
  }

  fetch16() {
    const nextInstructionAddress = this.getRegister("ip");
    const instruction = this.memory.getUint16(nextInstructionAddress);
    this.setRegister("ip", nextInstructionAddress + 2);
    return instruction;
  }

  execute(instruction: number) {
    switch(instruction) {
      case Instruction.MOV_LIT_R1: {
        const literal = this.fetch16();
        this.setRegister("r1", literal);
        return;
      }
      case Instruction.MOV_LIT_R2: {
        const literal = this.fetch16();
        this.setRegister("r2", literal);
        return;
      }
      case Instruction.ADD_REG_REG: {
        const r1 = this.fetch();
        const r2 = this.fetch();
        const registerValue1 = this.registers.getUint16(r1 * 2);
        const registerValue2 = this.registers.getUint16(r2 * 2);
        this.setRegister("acc", registerValue1 + registerValue2);
      }
    }
  }

  step() {
    const instruction = this.fetch();
    return this.execute(instruction);
  }
};
