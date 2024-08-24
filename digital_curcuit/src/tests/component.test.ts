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
});
