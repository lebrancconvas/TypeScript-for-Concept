# Nintendo Entertainment System - NES (Family Computer - FamiCom - FC) Note

## Architecture

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
