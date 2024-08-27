import { CPU } from "./cpu";
import { createMemory } from "./memory";
import { Instruction } from "./instruction";

import {
  BYTE
} from "../../config";


// Specify the memory size.

export function lesson01() {
  const memorySize = BYTE(512);
  const memory = createMemory(memorySize);
  const cpu = new CPU(memory);

  let writeableBytes = new Uint8Array(memory.buffer);
  const R1 = 2;
  const R2 = 3;
  let memoryData = [
    Instruction.MOV_LIT_R1,
    0x12,
    0x34,

    Instruction.MOV_LIT_R2,
    0xAB,
    0xCD,

    Instruction.ADD_REG_REG,
    R1,
    R2
  ];

  // Write data on memory.
  for(let i = 0; i < memoryData.length; i++) {
    writeableBytes[i] = memoryData[i];
  }

  cpu.debug();
  cpu.step();

  cpu.debug();
  cpu.step();

  cpu.debug();
  cpu.step();

  cpu.debug();
  cpu.step();


  cpu.debug();
}


