import type { RegisterName } from "./@types";

/**
 * Type of Register that contains in the CPU.
 * @name registerTypes
 * @value ip: Instruction Pointer
 * @value acc: Accumulator (Stored the result from artihmetic operations)
 * @value [r1, r2, r3, r4, r5, r6, r7, r8]: General Purpose Registers
 * @value sp: Stack Pointer (Pointer for Stack on Memory)
 * @value fp: Frame Pointer (Pointer for Stack Frame on Memory)
 */
export const registerTypes: RegisterName[] = [
  "ip", "acc",
  "r1", "r2", "r3", "r4",
  "r5", "r6", "r7", "r8",
  "sp", "fp"
];
