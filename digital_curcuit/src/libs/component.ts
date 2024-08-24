import { Gate } from './gate';
import type { BitElement } from '../@types';

/**
 * Switcher Component is a simple component that takes two inputs and a control signal.
 * @param enable Use to enable (1) or disable (0) the input.
 * @param input The input signal.
 * @returns
 */
export const switcher = (enable: BitElement, input: BitElement) => {
  return Gate.and(enable, input);
};

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
    throw new Error("Invalid number of BitElements. Expected 8 BitElements.");
  }

  let result = 0;

  bits.forEach((bit: BitElement, index: number) => {
    result += bit * Math.pow(2, bits.length - index - 1);
  })

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
