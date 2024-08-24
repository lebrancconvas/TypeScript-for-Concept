import { Arithmatic } from "../libs";
import { describe, test, expect } from "@jest/globals";


describe("Test Arithmatic: Half-Adder", () => {
  test("Test Half-Adder - Input1: 0, Input2: 0 must return Sum: 0, Carry: 0", () => {
    expect(Arithmatic.halfAdder(0, 0)).toEqual([0, 0]);
  })

  test("Test Half-Adder - Input1: 0, Input2: 1 must return Sum: 1, Carry: 0", () => {
    expect(Arithmatic.halfAdder(0, 1)).toEqual([1, 0]);
  })

  test("Test Half-Adder - Input1: 1, Input2: 0 must return Sum: 1, Carry: 0", () => {
    expect(Arithmatic.halfAdder(1, 0)).toEqual([1, 0]);
  })

  test("Test Half-Adder - Input1: 1, Input2: 1 must return Sum: 0, Carry: 1", () => {
    expect(Arithmatic.halfAdder(1, 1)).toEqual([0, 1]);
  })
});
