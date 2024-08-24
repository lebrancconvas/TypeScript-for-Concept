import { Gate } from "../libs";
import { describe, test, expect } from "@jest/globals";


describe("Test Custom Gate: Condition", () => {
  test("Test Conditon Gate - Input1: 0, Input2: 0 must return 1", () => {
    expect(Gate.Custom.condition(0, 0)).toBe(1);
  })

  test("Test Conditon Gate - Input1: 0, Input2: 1 must return 1", () => {
    expect(Gate.Custom.condition(0, 1)).toBe(1);
  })

  test("Test Conditon Gate - Input1: 1, Input2: 0 must return 0", () => {
    expect(Gate.Custom.condition(1, 0)).toBe(0);
  })

  test("Test Conditon Gate - Input1: 1, Input2: 1 must return 1", () => {
    expect(Gate.Custom.condition(1, 1)).toBe(1);
  })
});
