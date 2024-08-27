import { createMemory } from "./memory";
import { Instruction } from "./instruction";
import type { RegisterName, RegisterMap } from "./@types";


export class CPU {
  memory: DataView;
  registerNames: RegisterName[];
  registers: DataView;
  registerMap: RegisterMap;

  constructor(memory: DataView) {
    this.memory = memory;

    /**
     * ip: Instruction Pointer (Program Counter)
     * acc: Accumulator => Store the result from Mathematical Operations (We accumulate the value here)
     * r1, r2, r3, r4, r5, r6, r7, r8: General Purpose Registers
     * sp: Stack Pointer (Pointer for Stack using on memory)
     * fp: Frame Pointer (Pointer for Stack Frame using on memory)
     */
    this.registerNames = [
      "ip", "acc",
      "r1", "r2", "r3", "r4",
      "r5", "r6", "r7", "r8",
      "sp", "fp"
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
     * sp: 20
     * fp: 22
     */
    this.registerMap = this.registerNames.reduce((map: RegisterMap, name: RegisterName, i: number) => {
      map[name] = i * 2;
      return map;
    }, {} as RegisterMap);

  }

  debug() {
    console.log('===== STEP =====');
    this.registerNames.forEach(name => {
      console.log(`${name}: 0x${this.getRegister(name).toString(16).padStart(4, '0')}`);
    });
    console.log('================\n');
  }

  viewMemory(address: number) {
    const nextEightBytes = Array.from({length: 8}, (_, i) => {
      return this.memory.getUint8(address + i);
    }).map(memoryData => `0x${memoryData.toString(16).padStart(2, '0')}`);

    console.log(`Address(0x${address.toString(16).padStart(4, '0')}): ${nextEightBytes.join(' ')}`);
  }

  getRegister(name: RegisterName): number {
    return this.registers.getUint16(this.registerMap[name]);
  }

  setRegister(name: RegisterName, value: number) {
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
      case Instruction.MOV_LIT_REG: {
        const literal = this.fetch16();
        const register = (this.fetch() % this.registerNames.length) * 2;
        this.registers.setUint16(register, literal);
        return;
      }
      case Instruction.MOV_REG_REG: {
        const registerFrom = this.fetch();
        const registerTo = this.fetch();
        const value = this.registers.getUint16(registerFrom * 2);
        this.registers.setUint16(registerTo, value);
        return;
      }
      case Instruction.MOV_REG_MEM: {
        const registerFrom = (this.fetch() % this.registerNames.length) * 2;
        const address = this.fetch16();
        const value = this.registers.getUint16(registerFrom);
        this.memory.setUint16(address, value);
        return;
      }
      case Instruction.MOV_MEM_REG: {
        const address = this.fetch16();
        const registerTo = (this.fetch() % this.registerNames.length) * 2;
        const value = this.memory.getUint16(address);
        this.registers.setUint16(registerTo, value);
        return;
      }
      case Instruction.ADD_REG_REG: {
        const r1 = this.fetch();
        const r2 = this.fetch();
        const registerValue1 = this.registers.getUint16(r1 * 2);
        const registerValue2 = this.registers.getUint16(r2 * 2);
        this.setRegister("acc", registerValue1 + registerValue2);
        return;
      }
      case Instruction.JMP_NOT_EQ: {
        const value = this.fetch16();
        const address = this.fetch16();
        if(value !== this.getRegister("acc")) {
          this.setRegister("ip", address);
        }
        return;
      }
      default: {
        throw new Error(`[ERROR] Invalid Instruction: 0x${instruction.toString(16).padStart(2, '0')}`);
      }
    }
  }

  step() {
    const instruction = this.fetch();
    return this.execute(instruction);
  }

};
