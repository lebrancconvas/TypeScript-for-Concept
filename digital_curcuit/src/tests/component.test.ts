import { Component } from "../libs";
import { describe, test, expect } from "@jest/globals";


describe("Test Component: Switcher", () => {
  test("Test Switcher - Enable: 0 must return 0", () => {
    expect(Component.switcher(0, 0)).toBe(0);
    expect(Component.switcher(0, 1)).toBe(0);
  })

  test("Test Switcher - Enable: 1, Input: 0 must return 0", () => {
    expect(Component.switcher(1, 0)).toBe(0);
  })

  test("Test Switcher - Enable: 1, Input: 1 must return 1", () => {
    expect(Component.switcher(1, 1)).toBe(1);
  })
});

describe("Test Component: 1-Bit Multiplexer (Mux)", () => {
  test("Test 1-Bit Mux - Selector: 0, Input1: 0, Input2: 0 must return 0", () => {
    expect(Component.mux1(0, 0, 0)).toBe(0);
  })

  test("Test 1-Bit Mux - Selector: 0, Input1: 0, Input2: 1 must return 1", () => {
    expect(Component.mux1(0, 0, 1)).toBe(0);
  })

  test("Test 1-Bit Mux - Selector: 0, Input1: 1, Input2: 0 must return 1", () => {
    expect(Component.mux1(0, 1, 0)).toBe(1);
  })

  test("Test 1-Bit Mux - Selector: 0, Input1: 1, Input2: 1 must return 1", () => {
    expect(Component.mux1(0, 1, 1)).toBe(1);
  })

  test("Test 1-Bit Mux - Selector: 1, Input1: 0, Input2: 0 must return 0", () => {
    expect(Component.mux1(1, 0, 0)).toBe(0);
  })

  test("Test 1-Bit Mux - Selector: 1, Input1: 0, Input2: 1 must return 1", () => {
    expect(Component.mux1(1, 0, 1)).toBe(1);
  })

  test("Test 1-Bit Mux - Selector: 1, Input1: 1, Input2: 0 must return 0", () => {
    expect(Component.mux1(1, 1, 0)).toBe(0);
  })

  test("Test 1-Bit Mux - Selector: 1, Input1: 1, Input2: 1 must return 1", () => {
    expect(Component.mux1(1, 1, 1)).toBe(1);
  })
});

describe("Test Component: 1-Bit Demultiplexer (Demux", () => {
  test("Test 1-Bit Demux - Selector: 0, Input: 0 must return Output1: 0, Output2: 0", () => {
    expect(Component.demux1(0, 0)).toEqual({ output1: 0, output2: 0 });
  })

  test("Test 1-Bit Demux - Selector: 0, Input: 1 must return Output1: 1, Output2: 0", () => {
    expect(Component.demux1(0, 1)).toEqual({ output1: 1, output2: 0 });
  })

  test("Test 1-Bit Demux - Selector: 1, Input: 0 must return Output1: 0, Output2: 0", () => {
    expect(Component.demux1(1, 0)).toEqual({ output1: 0, output2: 0 });
  })

  test("Test 1-Bit Demux - Selector: 1, Input: 1 must return Output1: 0, Output2: 1", () => {
    expect(Component.demux1(1, 1)).toEqual({ output1: 0, output2: 1 });
  })
});
