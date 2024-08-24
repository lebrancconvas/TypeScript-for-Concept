/**
 */

import { Gate } from './gate';
import { Arithmatic } from './arithmatic';
import type { BitElement } from '../@types';

/**
 * Switcher Component is a simple component that takes input and an enabled.
 * @name swticher
 * @param enable Use to enable (1) or disable (0) the input.
 * @param input The input signal.
 * @return The output signal.
 */
export const switcher = (enable: BitElement, input: BitElement) => {
  return Gate.and(enable, input);
};

/**
 * 1-Bit Multiplexer (Mux) is a simple component that takes two inputs and a selector.and return the output depending on the selector.
 * @name mux1 (1-Bit Multiplexer)
 * @param selector Use to select which input to pass to the output. If selector is 0, input1 will be passed to the output. If selector is 1, input2 will be passed to the output.
 * @param input1 The first input signal.
 * @param input2 The second input signal.
 * @return The output signal.
 */
export const mux1 = (selector: BitElement, input1: BitElement, input2: BitElement) => {
  return Gate.or(Gate.and(Gate.not(selector), input1), Gate.and(selector, input2));
};

/**
 * 1-Bit Demultiplexer (Demux) is a simple component that takes one input and a selector and passed the output depending on the selector.
 * @name demux1 (1-Bit Demultiplexer)
 * @param selector Use to select which output to pass to the input. If selector is 0, input will be passed to output1. If selector is 1, input will be passed to output2.
 * @param input The input signal.
 * @returns output1, output2
 */
export const demux1 = (selector: BitElement, input: BitElement) => {
  return {
    output1: Gate.and(Gate.not(selector), input),
    output2: Gate.and(selector, input),
  };
};

/**
 * Byte Maker is a simple component that takes 8 bits and return a byte (number).
 * @name byteMaker
 * @param bits Array of bit element (Length: 8 => represent 8 bits).
 * @param isUnsigned Checking that the byte is signed (false) or unsigned (true).
 * @return byte (number)
 */
export const byteMaker = (bits: BitElement[], isUnsigned: boolean = true) => {
  if(bits.length !== 8) {
    throw new Error("Invalid number of bits, Expected 8 bits.");
  }

  let result = 0;

  for(let i = 0; i < bits.length; i++) {
    if(isUnsigned === false && i === 0) {
      result += -(bits[i] * Math.pow(2, (bits.length - 1) - i));
      continue;
    }
    result += bits[i] * Math.pow(2, (bits.length - 1) - i);
  }

  return result;
};

/**
 * Byte Splitter is a simple component that takes a byte (number) and return an array of bits (length: 8).
 * @name byteSplitter
 * @param byte the byte number between 0 to 255 (Unsigned) or -128 to 127. (signed)
 * @return bits (BitElement[])
 */
export const byteSplitter = (byte: number): [BitElement[], boolean] => {
  let bits: BitElement[] = [];
  let isUnsigned = true;

  if(byte < 0) {
    isUnsigned = false;
    byte = Math.pow(2, 8) + byte;
  }

  while(byte > 0) {
    let bit = byte % 2 as BitElement;
    bits.unshift(bit);
    byte = Math.floor(byte / 2);
  }

  while(bits.length < 8) {
    bits.unshift(0);
  }

  return [bits, isUnsigned];
};

export class Component {
  static switcher = switcher;
  static mux1 = mux1;
  static demux1 = demux1;
  static byteMaker = byteMaker;
  static byteSplitter = byteSplitter;
  static Gate = Gate;
  static Arithmatic = Arithmatic;
};
