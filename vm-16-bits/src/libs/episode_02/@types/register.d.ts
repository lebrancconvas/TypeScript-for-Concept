export type RegisterName =
  | "ip" // Instruction Pointer (Program Counter)
  | "acc" // Accumulator
  | "r1" // General Purpose 1st Register
  | "r2" // General Purpose 2nd Register
  | "r3" // General Purpose 3rd Register
  | "r4" // General Purpose 4th Register
  | "r5" // General Purpose 5th Register
  | "r6" // General Purpose 6th Register
  | "r7" // General Purpose 7th Register
  | "r8"; // General Purpose 8th Register 

export type RegisterMap = {
  [key in RegisterName]: number
};
