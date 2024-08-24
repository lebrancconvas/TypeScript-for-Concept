import type { BitElement } from "../@types";

export class Bit {
  bit: Bit;
  isUnsigned: boolean;

  constructor(bit: Bit, isUnsigned: boolean = true) {
    this.bit = bit;
    this.isUnsigned = isUnsigned;
  }
};
