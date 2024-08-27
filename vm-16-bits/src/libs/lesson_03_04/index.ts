import { CPU } from "./cpu";
import { createMemory } from "./memory";
import { Instruction } from "./instruction";

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
  const memoryData: number[] = [
    Instruction.MOV_LIT_REG,
    0x12,
    0x34,
    R1,

    Instruction.MOV_LIT_REG,
    0xAB,
    0xCD,
    R2,

    Instruction.PSH_REG,
    R1,

    Instruction.PSH_REG,
    R2,

    Instruction.POP,
    R1,

    Instruction.POP,
    R2
  ];
  for(let i = 0; i < memoryData.length; i++) {
    writeableBytes[i] = memoryData[i];
  }

  // Execute the program.
  const pointer = cpu.getRegister('ip');
  const stackMemory = 0xffff - 1 - 6;

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(pointer);
  cpu.viewMemory(stackMemory);
  cpu.debug();
};
