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
 * @param input1
 * @param input2
 * @param input3
 * @returns sum, carry
 */
export const fullAdder = (input1: BitElement, input2: BitElement, input3: BitElement): [BitElement, BitElement] => {
  let sum = Gate.xor(Gate.xor(input1, input2), input3);
  let carry = Gate.or(Gate.and(input1, input2), Gate.and(Gate.xor(input1, input2), input3));
  return [sum, carry];
};
