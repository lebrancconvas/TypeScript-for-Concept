# NES's Central Processing Unit (CPU)

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

## Reference

- [[EN: Text] CPU (NESdev Wiki)](https://www.nesdev.org/wiki/Implementing_Mappers_In_Hardware)
- [[EN: Text] 6502 Instruction (NESdev Wiki)](https://www.nesdev.org/wiki/6502_instructions)
- [[EN: Text] CPU Addressing Mode (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_addressing_modes)
- [[EN: Text] CPU Memory Map (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_memory_map)
- [[EN: Text] CPU Power Up State (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_power_up_state)
- [[EN: Text] CPU Register (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_registers)
- [[EN: Text] CPU Status Flag (NESdev Wiki)](https://www.nesdev.org/wiki/Status_flags)
- [[EN: Text] CPU Interrupt (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_interrupts)
- [[EN: Text] CPU Unofficial Opcodes (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_unofficial_opcodes)
- [[EN: Text] CPU Pinout (NESdev Wiki)](https://www.nesdev.org/wiki/CPU_pinout)
