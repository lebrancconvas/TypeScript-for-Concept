import { CPU } from "./cpu";
import { createMemory } from "./memory";
import { Instruction } from "./instruction";

import { BYTE, KILO_BYTE } from "../../config";

export function ep02() {
  // Setup components.
  const memorySize = KILO_BYTE(10);
  const memory = createMemory(memorySize);
  const cpu = new CPU(memory);
  const R1 = cpu.registerMap.r1 / 2;
  const R2 = cpu.registerMap.r2 / 2;
  const ACC = cpu.registerMap.acc / 2;

  // Write data on memory.
  const writeableBytes = new Uint8Array(memory.buffer);
  const memoryData = [
    Instruction.MOV_MEM_REG,
    0x01,
    0x00,
    R1,

    Instruction.MOV_LIT_REG,
    0x12,
    0x34,
    R2,

    Instruction.ADD_REG_REG,
    R1,
    R2,

    Instruction.MOV_REG_MEM,
    ACC,
    0x01,
    0x00
  ];

  for(let i = 0; i < memoryData.length; i++) {
    writeableBytes[i] = memoryData[i];
  }

  // Execute instructions.
  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(0x0100);
  cpu.debug();


};
