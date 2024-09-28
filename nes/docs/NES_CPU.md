# NES's Central Processing Unit (CPU)

## Register

- A: Accumulator (1 Byte = 8 Bits)
  - Along with [Arithmetic Logic Unit (ALU)](https://en.wikipedia.org/wiki/Arithmetic_logic_unit)
  - Support using the status register for carrying.
  - Overflow Detection.
- X: General-Purpose Register (1 Byte = 8 Bits)
  - Used for several addressing mode.
  - Used as Loop Counter easily.
  - Using INC/DEC and Branch Instructions.
- Y: General-Purpose Register (1 Byte = 8 Bits)
  - Used for several addressing mode.
  - Used as Loop Counter easily.
  - Using INC/DEC and Branch Instructions.
- stkp (S): Stack Pointer (1 Byte = 8 Bits)
  - Access: interrupts, pulls, pushes, and transfers.
  - Index into 256 Bytes (2048 Bits) stack (0x0100 to 0x01FF)
- pc (PC): Program Counter (2 Bytes = 16 Bits)
  - Support 65536 direct (unbanked) memory location.
  - Not all value are sent to cartridge.
  - Can be accessed by allowing CPU's Internal Fetch Logic increment the address bus.
  - Interrupt (NMI (Non-Masking Interrupt), Reset, IRQ (Interrupt Request)/BRQ)
  - Using the RTS (Return from Subroutine) / JMP / JSR (Jump to Subroutine) / Branch Instructions.
- status (P): Status Register (6 Bits)
  - Used by ALU
  - Access: PHP (Push Processor Status), PLP (Pull Processor Status), Arithmetic, Testing, Branch Instructions.

## Status Flag

- Format: NV1BDIZC (1 Byte = 8 Bits)

### C: Carry

### Z: Zero

### I: Interrupt Disable

### D: Decimal

### V: Overflow

### N: Negative

### B: B Flag

## CPU Cycle

- Read Byte at "Program Counter (PC)"
- Opcode[Byte]
  - Addressing Mode
  - Cycle
- Read 0, 1, or 2 more Bytes
- Execute
- Wait, Count Cycles, Complete

## Reference

- [[EN: Text] 2A03 Technical Reference (NESdev.org)](https://www.nesdev.org/2A03%20technical%20reference.txt)
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
- [[EN: Text] Stack (NESdev Wiki)](https://www.nesdev.org/wiki/Stack)
