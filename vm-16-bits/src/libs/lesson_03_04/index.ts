import { CPU } from "./cpu";
import { createMemory } from "./memory";
import { Instruction } from "./instruction";

import readline from "readline";

import { KILO_BYTE } from "../../config";

export function lesson03_04() {
  // Setup the components.
  const memorySize = KILO_BYTE(64);
  const memory = createMemory(memorySize);
  const cpu = new CPU(memory);
  const IP = cpu.registerMap.ip / 2;
  const ACC = cpu.registerMap.ip / 2;
  const R1 = cpu.registerMap.r1 / 2;
  const R2 = cpu.registerMap.r2 / 2;
  const R3 = cpu.registerMap.r3 / 2;
  const R4 = cpu.registerMap.r4 / 2;
  const R5 = cpu.registerMap.r5 / 2;
  const R6 = cpu.registerMap.r6 / 2;
  const R7 = cpu.registerMap.r7 / 2;
  const R8 = cpu.registerMap.r8 / 2;
  const SP = cpu.registerMap.sp / 2;
  const FP = cpu.registerMap.fp / 2;



  // Assign Memory Data.
  const writeableBytes = new Uint8Array(memory.buffer);
  const subroutineAddress = 0x3000;
  const memoryData: number[] = [
    Instruction.PSH_LIT, 0x00, 0x03,
    Instruction.PSH_LIT, 0x00, 0x02,
    Instruction.PSH_LIT, 0x00, 0x01,
    Instruction.MOV_LIT_REG, 0x12, 0x34, R1,
    Instruction.MOV_LIT_REG, 0x56, 0x78, R4,
    Instruction.PSH_LIT, 0x00, 0x00,
    Instruction.CAL_LIT, (subroutineAddress & 0xff00) >> 8, (subroutineAddress & 0x00ff),
    Instruction.PSH_LIT, 0x44, 0x44,
  ];
  for(let i = 0; i < memoryData.length; i++) {
    writeableBytes[i] = memoryData[i];
  }

  const memorySubroutineData: number[] = [
    Instruction.PSH_LIT, 0x01, 0x02,
    Instruction.PSH_LIT, 0x03, 0x04,
    Instruction.PSH_LIT, 0x05, 0x06,
    Instruction.MOV_LIT_REG, 0x07, 0x08, R1,
    Instruction.MOV_LIT_REG, 0x09, 0x0a, R8,
    Instruction.RET,
  ];
  for(let i = subroutineAddress; i < subroutineAddress + memorySubroutineData.length; i++) {
    writeableBytes[i] = memorySubroutineData[i - subroutineAddress];
  }

  // Execute the program.
  const pointer = cpu.getRegister('ip');
  const stackMemory = 0xffff - 1 - 42;

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory, 44);
  cpu.debug();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', () => {
    cpu.step();
    cpu.viewMemory(pointer);
    cpu.viewMemory(stackMemory, 44);
    cpu.debug();
  });
};
