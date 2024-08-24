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

describe("Test Arithmatic: 1-Bit Comparator (comparator1)", () => {
  test("Test Comparator1 - Input1: 0, Input2: 0 must return lessThan: 0, equal: 1, greaterThan: 0", () => {
    expect(Arithmatic.comparator1(0, 0)).toEqual([0, 1, 0]);
  })

  test("Test Comparator1 - Input1: 0, Input2: 1 must return lessThan: 1, equal: 0, greaterThan: 0", () => {
    expect(Arithmatic.comparator1(0, 1)).toEqual([1, 0, 0]);
  })

  test("Test Comparator1 - Input1: 1, Input2: 0 must return lessThan: 0, equal: 0, greaterThan: 1", () => {
    expect(Arithmatic.comparator1(1, 0)).toEqual([0, 0, 1]);
  })

  test("Test Comparator1 - Input1: 1, Input2: 1, Input3: 1 must return lessThan: 0, equal: 1, greaterThan: 0", () => {
    expect(Arithmatic.comparator1(1, 1)).toEqual([0, 1, 0]);
  })
});
