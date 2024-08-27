# Chapter 01

## Virtual Machine (VM) 16-Bits Register-Based

### Requirement

- Register-Based Virtual Machine
- Signed, Unsigned and Floating Point Operations
- Call Stack / Stack Frame Structure
- Interrupt Capabilities
- Memory Mapping
- Powerful Assembly Language
- C-Like Language
- Fantasy Game Console

## Turing Machine

- ไม่สามารถสร้าง Infinite Tape ได้ เลยต้องสร้างอะไรที่มาทดแทน

## Vonn-Neumann Architecture

- Finite Amount of Memory
  - Sequentially Addressable
  - ใช้ 0 กับ 1 ในการเก็บค่า
  - ค่าสามารถเก็บ (Stored) และ โหลด (Loaded) ออกมาจาก Memory ได้
- Table of Instruction + The Current Machine State แทนด้วย CPU (Central Processing Unit)

## Central Processing Unit (CPU)

- Modified its internal state as well as modified memory, Built upon Boolean Logic in Digital Circuit
  - or Logic Gate: NOT, AND, OR, NAND, NOR, XOR, XNOR
    - Arithmetic: Half Adder, etc.
    - Multiplexer (Mux)
    - etc.

### Power of CPU

- Power of CPU ขึ้นอยู่กับ Instruction
  - เช่น
    - 6502
      - 56 Instructions
      - ใช้ใน
        - Nintendo Entertainment System (NES)
        - C64
        - Apple II
    - Z80
      - 252+ Instructions
      - ใช้ใน
        - Zx Spectrum
        - Sega Master System
        - Pac-Man
    - 8086
      - ~85 Instructions
      - ใช้ใน
        - Compaq Deskpro
        - IBM PS/2

### Instruction Work

- Memory Data Around
- Math & Manipulation
- Jumping around to different parts of a program
- Making Comparison & Decision about how to proceed with program
- Subroutine / Subprocess

## Making of Virtual Machine

### Make Part of Virtual Machine

- Memory
- Central Processing Unit (CPU)

### Implementation

- **Memory**: Using ArrayBuffer
  - ArrayBuffer: Object is used to represent a generic raw binary data buffer (also called “Array of Byte” or “Byte Array”)
  - Return as “DataView”
    - DataView
      - byteLength (Size)
      - byteOffset
      - buffer: ArrayBuffer
        - Contents: <<Array of Byte>>
        - byteLength: <Size>
- **Register**
  - registerNames: Array ที่ระบุชื่อของ Register (String Value) ที่จะใช้ทั้งหมด
    - Register Name ที่ใช้
      - ip: Instruction Pointer
      - acc: Accumulator
      - r1
      - r2
      - r3
      - r4
      - r5
      - r6
      - r7
      - r8
    - Register Map: Object ที่เก็บชื่อของ Register แต่ละตัวที่ใช้เป็น Key และเก็บตำแหน่ง Byte เริ่มต้นของ Register แต่ละตัวเป็น Value
      - ip: Instruction Pointer ⇒ 0
      - acc: Accumulator ⇒ 2
      - r1 ⇒ 4
      - r2 ⇒ 6
      - r3 ⇒ 8
      - r4 ⇒ 10
      - r5 ⇒ 12
      - r6 ⇒ 14
      - r7 ⇒ 16
      - r8 ⇒ 18
  - 1 Hex ใช้ 4 Bits
  - 1 Byte ใช้ 8 Bits
  - แปลว่า 1 Byte ใช้ 2 Hex (1 Byte อยู่ในรูปของ 00 ซึ่งเป็น Slot ของเลขฐานสิบหก หรือ Hex)
  - Uint8: ใช้ 8 Bits (1 Byte)
  - Uint16: ใช้ 16 Bits (2 Byte)
  - ArrayBuffer ของ Register มีความยาวเป็น 2 เท่าของ register ทั้งหมดที่ใช้ (นับจากจำนวนของ registerNames)
  - setRegister(name, value): Set ค่า (value) ลง Register (name) โดยค่านั้นเป็นค่า 16 Bits (2 Byte)
  - getRegister(name): Get ค่ามาจากตำแหน่งของ Register (name) ที่กำหนด โดยค่านั้นเป็นค่า 16 Bits (2 Byte)
- **CPU**
  - กระบวนการของ CPU เป็น Cycle ตามกระบวนการดังนี้
    - Fetch
    - Decode
    - Execute
  - แต่ในบริบทของ Virtual Machine ที่เราจะสร้าง เราจะรวบ Cycle ให้เหลือแค่
    - Fetch
      - Fetch (8 Bits)
        - รับค่าจาก Register ในตำแหน่งของ Instruction Pointer (ip) เป็นค่า 16 Bits (2 Byte)
        - รับค่าจาก Memory ตามตำแหน่งตามค่าที่ได้มาจาก Instruction Pointer (ip) เป็นค่า 8 Bits (1 Byte) โดยค่านั้นจะเป็นตัวแทนของ Instruction ที่จะทำ
        - บวกค่า Instruction Pointer เดิมไป 1 (บวกไป 1 เพราะค่าใน Memory ใช้ไปแล้ว 1 Byte) แล้ว Set ค่าไปที่ Register ตรงตำแหน่งของ Instruction Pointer (ip)
      - Fetch16 (16 Bits)
        - รับค่าจาก Register ในตำแหน่งของ Instruction Pointer (ip) เป็นค่า 16 Bits (2 Byte)
        - รับค่าจาก Memory ตามตำแหน่งตามค่าที่ได้มาจาก Instruction Pointer (ip) เป็นค่า 16 Bits (2 Byte) โดยค่านั้นจะเป็นตัวแทนของ Instruction ที่จะทำ
        - บวกค่า Instruction Pointer เดิมไป 2 (บวกไป 2 เพราะค่าใน Memory ใช้ไปแล้ว 2 Bytes) แล้ว Set ค่าไปที่ Register ตรงตำแหน่งของ Instruction Pointer (ip)
    - Execute
      - รับค่า Instruction ที่ได้มาจาก Fetch แล้วมาทำ Instruction นั้นตามที่กำหนดไว้
