# NES CPU

## Register

- A: Accumulator (1 Byte = 8 Bits)
- X: General-Purpose Register (1 Byte = 8 Bits)
- Y: General-Purpose Register (1 Byte = 8 Bits)
- stkp: Stack Pointer
- pc: Program Counter
- status: Status Register

## CPU Cycle

- Read Byte at "Program Counter (PC)"
- Opcode[Byte]
  - Addressing Mode
  - Cycle
- Read 0, 1, or 2 more Bytes
- Execute
- Wait, Count Cycles, Complete
