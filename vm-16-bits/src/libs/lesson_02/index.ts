import { CPU } from "./cpu";
import { createMemory } from "./memory";
import { Instruction } from "./instruction";

import { BYTE, KILO_BYTE } from "../../config";

export function lesson02() {
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
    Instruction.MOV_LIT_REG, // mov <lit> <reg>: Move / Assign Literal Value to Register.
    0x12,
    0x34, // 0x1234 -> Literal Value (16-Bits or 2 Bytes)
    R1, // R1 Register

    Instruction.MOV_LIT_REG, // mov <lit> <reg>: Move / Assign Literal Value to Register.
    0xAB,
    0xCD, // 0xABCD -> Literal Value (16-Bits or 2 Bytes)
    R2, // R2 Register

    Instruction.ADD_REG_REG, // add <reg>, <reg>: Arithmetic Addition of Register Values and Stored in ACC Register.
    R1, // R1 Register
    R2, // R2 Register

    Instruction.MOV_REG_MEM, // mov <reg> <mem>: Move / Assign Register Value to Memory Address.
    ACC, // ACC Register
    0x01,
    0x00, // 0x0100 -> Memory Address (16-Bits or 2 Bytes)

    Instruction.JMP_NOT_EQ, // jmpne <lit>: Jump to Address if ACC Register Value is Not Equal to Literal Value.
    0x12,
    0x34 // 0x1234 -> Literal Value (16-Bits or 2 Bytes)
  ];

  for(let i = 0; i < memoryData.length; i++) {
    writeableBytes[i] = memoryData[i];
  }

  // Execute instructions.
  cpu.viewMemory(cpu.getRegister("ip"));
  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(cpu.getRegister("ip"));
  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(cpu.getRegister("ip"));
  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(cpu.getRegister("ip"));
  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(cpu.getRegister("ip"));
  cpu.viewMemory(0x0100);
  cpu.debug();
  cpu.step();

  cpu.viewMemory(cpu.getRegister("ip"));
  cpu.viewMemory(0x0100);
  cpu.debug();

};
