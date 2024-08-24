import { Gate } from "./gate";
import type { BitElement } from "../@types";

export const condition = (input1: BitElement, input2: BitElement) => Gate.or(Gate.not(input1), input2);


export class Custom {
  static condition = condition;
};
