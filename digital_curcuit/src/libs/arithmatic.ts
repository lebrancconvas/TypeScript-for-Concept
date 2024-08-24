import type { BitElement } from "../@types";
import { Gate } from "../libs";

/**
 * Half-Adder Component is an arithmetic component that received two inputs and return sum and carry.
 * @name halfAdder
 * @param input1
 * @param input2
 * @return sum, carry
 */
export const halfAdder = (input1: BitElement, input2: BitElement): [BitElement, BitElement] => {
  let sum = Gate.xor(input1, input2);
  let carry = Gate.and(input1, input2);
  return [sum, carry];
};

/**
 * Full-Adder Component is an arithmetic component that received three inputs and return sum and carry.
 * @name fullAdder
 * @param input1 The First Input Signal (1-Bit).
 * @param input2 The Second Input Signal (1-Bit).
 * @param input3 The Third Input Signal (1-Bit).
 * @returns sum, carry
 */
export const fullAdder = (input1: BitElement, input2: BitElement, input3: BitElement): [BitElement, BitElement] => {
  let sum = Gate.xor(Gate.xor(input1, input2), input3);
  let carry = Gate.or(Gate.and(input1, input2), Gate.and(Gate.xor(input1, input2), input3));
  return [sum, carry];
};

/**
 * 1-Bit Comparator Component is an arithmetic component that received two inputs and return less than, equal, and greater than.
 * @name comparator1
 * @param input1 The First Input Signal (1-Bit).
 * @param input2 The Second Input Signal (1-Bit).
 * @returns lessThan, equal, greaterThan
 */
export const comparator1 = (input1: BitElement, input2: BitElement): [BitElement, BitElement, BitElement] => {
  let lessThan = Gate.and(Gate.not(input1), input2);
  let equal = Gate.xor(input1, input2);
  let greaterThan = Gate.and(input1, Gate.not(input2));
  return [lessThan, equal, greaterThan];
};

export class Arithmatic {
  static halfAdder = halfAdder;
  static fullAdder = fullAdder;
  static comparator1 = comparator1;
};
