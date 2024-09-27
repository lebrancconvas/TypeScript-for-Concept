import { Memory, CPU, Bus } from "./components";

const MEMORY_SIZE_64KBs = 64 * (2 ** 10); // 64 KBs

const RAM = Memory.create(MEMORY_SIZE_64KBs);


