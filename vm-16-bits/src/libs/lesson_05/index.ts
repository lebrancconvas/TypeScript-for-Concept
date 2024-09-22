import { CPU } from "./cpu";
import { createMemory } from "./memory";
import { Instruction } from "./instruction";

import { MemoryMapper } from "./memory_mapper";

import { screenDevice } from "./io";

import readline from "readline";

import { KILO_BYTE } from "../../config";
import { write } from "fs";

export function lesson05() {
  // Setup the components.


  const memorySize = KILO_BYTE(64);
  const memory = createMemory(memorySize);

    // Setup the Memory Mapper.
  const memoryMapper = new MemoryMapper();
  memoryMapper.map(memory, 0, 0xffff);
  memoryMapper.map(screenDevice(), 0x3000, 0x30ff, true);

  const cpu = new CPU(memoryMapper);
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
  let i = 0;
  const writeCharToScreen = (char: string, position: number) => {
    writeableBytes[i++] = Instruction.MOV_LIT_REG;
    writeableBytes[i++] = 0x00;
    writeableBytes[i++] = char.charCodeAt(0);
    writeableBytes[i++] = R1;

    writeableBytes[i++] = Instruction.MOV_REG_MEM;
    writeableBytes[i++] = R1;
    writeableBytes[i++] = 0x30;
    writeableBytes[i++] = position;
  }

  const printOutput = "Hello, World!";

  printOutput.split("").forEach((char, index) => {
    writeCharToScreen(char, index);
  });

  writeableBytes[i++] = Instruction.HLT;
  cpu.run();

};
