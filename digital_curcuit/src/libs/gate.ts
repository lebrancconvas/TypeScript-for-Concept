import type { BitElement } from '../@types';

export const not = (input: BitElement) => (~input & 1) && 1;
export const and = (input1: BitElement, input2: BitElement) => input1 && input2;
export const or = (input1: BitElement, input2: BitElement) => input1 || input2;
export const nand = (input1: BitElement, input2: BitElement) => not(and(input1, input2));
export const nor = (input1: BitElement, input2: BitElement) => not(or(input1, input2));
export const xor = (input1: BitElement, input2: BitElement) => input1 ^ input2;
export const xnor = (input1: BitElement, input2: BitElement) => ~(input1 ^ input2) & 1;

export class Gate {
  static not = not;
  static and = and;
  static or = or;
  static nand = nand;
  static nor = nor;
  static xor = xor;
  static xnor = xnor;
};