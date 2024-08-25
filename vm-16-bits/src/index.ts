import {
  CPU,
  createMemory,
  Instruction
} from "./libs/episode_01";


const memorySize = 256;
const memory = createMemory(memorySize);
const cpu = new CPU(memory);

const writeableBytes = new Uint8Array(memory.buffer);

// Write data on memory.

writeableBytes[0] = Instruction.MOV_LIT_R1;
writeableBytes[1] = 0x12;
writeableBytes[2] = 0x34;

writeableBytes[3] = Instruction.MOV_LIT_R2;
writeableBytes[4] = 0xAB;
writeableBytes[5] = 0xCD;

writeableBytes[6] = Instruction.ADD_REG_REG;
writeableBytes[7] = 2;
writeableBytes[8] = 3;

cpu.debug();
cpu.step();

cpu.debug();
cpu.step();

cpu.debug();
cpu.step();

cpu.debug();
cpu.step();


cpu.debug();

