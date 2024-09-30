# Nintendo Entertainment System - NES (Family Computer - FamiCom - FC) Note

## Architecture

### Components

- **CPU-Related Components**: Exist on NES's Mainboard
  - Central Processing Unit (CPU)
    - Custom Processor based-on MOS 6502
    - Chip: RP2A03 on NTSC
    - Chip: RP2A07 on PAL
    - Lacking Decimal Mode Circuitry
    - Audio Processing Unit (APU)
  - CPU System Memory
    - 2 KiloBytes (2 KBs) Static RAM (SRAM) Chip in NES's Mainboard.
    - Used to store Mutable Data for a game. (Animation Timer, Player Health, etc.)
    - Primary Memory when writing a game's algorithm.
- **PPU-Related Components**: Exist on NES's Mainboard
  - Picture Processing Unit (PPU)
    - Associated 2 KiloBytes (2 KBs) Static RAM (SRAM) that can be called "Video RAM (VRAM)"
      - Hold the Name Table, Attribute Table, and Palettes.
      - Used by the cartridge to control how a game mirrors name table when performing screen scrolling.
    - Rendering a game's graphics.
    - Has a fixed set of functionality that cannot be programmed directly.
    - Rendering can be modified by way of Memory Mapped I/O Register that can be manipulated by CPU.
      - Example
        - PPUCTRL: 0x2000
        - PPUMASK: 0x2001
        - PPUSTATUS: 0x2002
        - PPUDATA: 0x2006
        - PPUADDR: 0x2007
- **Cartridge-Related Components**: Exist on NES's Game Cartridge
  - Game Cartridge
    - Every Cartridge have program ROM chip
      - Store the machine code for the game
      - Character ROM or Character RAM chip that store the tile data aka the tiny 8x8 images that are used to compose the full background and foreground graphics.
      - Some cartridge have their own general purpose RAM chips that can be accessed directly by the CPU.
      - In some cases this RAM is kept powered continuously by a small battery soldered onto the cartridge's PCB allowing for the storage and retrieval of save game information.
      - Many games also contain special chips known as "Mappers" which can be used to change the behavior or output of other chips on the cartridge's PCB programs
      - Program controls the mappers by way of writing data to specific Memory Mapped I/O Location
- **Bus**
  - Group of Wire
  - It's called "Parallel Bus" when there's more than one line.
  - It's called "Serial Bus" when there's a single line.
  - Contains two major buses in NES.
    - Data Bus
      - Contains 8 wires (Represent 8 bits)
      - Used to communicate byte-sized information between the components and an address bus.
    - Address Bus
      - 16 Bits (2 Bytes) size.
      - Used to communicate address every component in the computer that needs to access or manipulate data
- **Memory-Mapped Input/Output (Memory-Mapped I/O: MMIO)**
  - Technique that segment a system's overall memory space into the multiple region and assign each region to a specific I/O Hardware.
  - NES segments into 4 parts
    - System RAM (Static RAM: SRAM)
    - Picture Processing Unit (PPU) I/O Register
    - Audio Processing Unit (APU) Register
    - Cartridge

### Diagram

### Spec

- **Central Processing Unit (CPU)**
  - **Model: CPU 2AO3 (Variant of 6502 Processor)**
    - Has no Internal Memory
    - 8-Bits Device
    - It can address 16-Bits range.
    - It could interface to 64 KiloBytes (64 KBs) Memory
- **Main Memory**
  - 2 KiloBytes (2 KBs) of Memory
  - Region Mapped (CPU Bus): 0x0000 - 0x07FF
- **Picture Processing Unit (PPU)**
  - **Model: PPU 2CO2**
    - Region Mapped (CPU Bus): 0x2000 - 0x2007
    - Earliest Graphics Card
    - Compose the picture, we see on the screen.
    - Can think of it as the Parallel Processing Unit.
    - Has its own Bus. (PPU Bus)
    - 16 KiloBytes (16 KBs) Addressable Range.
    - Only has 8 Letterboxes through which to deposit information and exchange information with the PPU.
- **Audio Processing Unit (APU)**
  - Generating the sound
  - In Reality: It's actually the part of CPU.
  - In Concept: Can be seperate as another component to connect with the Bus.
  - Region Mapped (CPU Bus): 0x4000 - 0x4017
- **Cartridge (ตลับเกม)**
  - Region Mapped (CPU Bus): 0x4020 - 0xFFFF
- **Mapper**
  - Inside the Cartridge.
  - Due to the request of more graphics resolution for NES games.
  - Different types of Mappers.
  - Most of games just use 3 or 4 different configurations of mapping.
  - Have Bank Switching that config from CPU to the mapper to give different data for the same address ranges.
  - Example: Bank A has Graphics for Level 1, Bank B has different Graphics for that level.
  - Notthing has to be loaded or transacted along the Bus.
  - Just simply changing the mapping of the addresses to different memory location
  - On the cartridge to the PPU and CPU addressing, those locations on their buses they see no difference they don't know anything has changed but the mapper delivers different data.
  - So We can have significantly larger memories devoted to graphics and programs.
  - The Program data is obviously store at the cartridge.
  - Exceed Memory that NES game required is 64 KiloBytes (64 KBs)
- **Clock**
  - Connect with CPU and PPU
  - Every clock tick the PPU will output some pixel to the screen.
  - CPU and PPU run in different clock speed.
  - PPU clocks 3x (3 times) the frequency of the CPU clock.
- **Graphics**
  - Store Pixel Data or Sprites or Tiles.
  - Region Mapped (PPU Bus): 0x0000 - 0x1FFF
  - It also connect to the Cartridge.
- **VRAM**
  - 2 KiloBytes (2 KBs) Memory.
  - Used to store identify that represent which tiles to draw in the background.
  - Region Mapped (PPU Bus): 0x2000 - 0x2FFF
- **Palettes**
  - Region Mapped (PPU Bus): 0x3F00 - 0x3FFF
  - It has proprietary format about NES Graphics.
  - Graphics on NES has 2 Bits per Pixel (2 BPPs)
  - Those 2 Bits were indexed to the Palettes.
- **Object Attribute Memory (OAM)**
  - Connect with PPU but not depend on any bus.
  - Used to store the location of the sprites that we see on the screen.
- **Direct Memory Access (DMA)**
  - Temporary suspends the CPU and transfer memory directly to the OAM
  - CPU can prepare its own address space with where the sprites should be.
  - But it doesn't need to block itself down with manually transfering that information through this
  limited space.

## Note

- Sprites and things moving on the screen perform by CPU.
- PPU is just for drawing the pixel (doesn't imply the physics or movement).
- CPU needs to populate the OAM every frame.
- CPU maybe update OAM manually. so NES provided a dedicated peripheral just for doing this and
it's a primitive form of DMA.
