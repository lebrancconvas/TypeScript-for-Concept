import { Gate } from './gate';
import type { BitElement } from '../@types';

/**
 * Switcher Component is a simple component that takes input and an enabled.
 * @param enable Use to enable (1) or disable (0) the input.
 * @param input The input signal.
 * @return The output signal.
 */
export const switcher = (enable: BitElement, input: BitElement) => {
  return Gate.and(enable, input);
};

/**
 * 1-Bit Multiplexer (Mux) is a simple component that takes two inputs and a selector.
 * @param selector Use to select which input to pass to the output. If selector is 0, input1 will be passed to the output. If selector is 1, input2 will be passed to the output.
 * @param input1 The first input signal.
 * @param input2 The second input signal.
 * @return The output signal.
 */
export const mux1 = (selector: BitElement, input1: BitElement, input2: BitElement) => {
  return Gate.or(Gate.and(Gate.not(selector), input1), Gate.and(selector, input2));
};

export const demux1 = (selector: BitElement, input: BitElement) => {
  return {
    output1: Gate.and(Gate.not(selector), input),
    output2: Gate.and(selector, input),
  };
};

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

export const byteSplitter = (byte: number) => {
  let bits: BitElement[] = [];
  while(byte > 0) {
    let bit = byte % 2 as BitElement;
    bits.unshift(bit);
    byte = Math.floor(byte / 2);
  }
};

export class Component {
  static switcher = switcher;
  static mux1 = mux1;
  static demux1 = demux1;
  static byteMaker = byteMaker;
  static Gate = Gate;
};
