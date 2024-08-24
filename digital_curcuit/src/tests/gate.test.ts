import { Gate } from "../libs";
import { describe, test, expect } from "@jest/globals";


describe("Test Logic NOT Gate", () => {
  test("Test NOT Gate - Input: 0 must return 1", () => {
    expect(Gate.not(0)).toBe(1);
  })

  test("Test NOT Gate - Input: 1 must return 0", () => {
    expect(Gate.not(1)).toBe(0);
  })
});

describe("Test Logic AND Gate", () => {
  test("Test AND Gate - Input: 0, 0 must return 0", () => {
    expect(Gate.and(0, 0)).toBe(0);
  });

  test("Test AND Gate - Input: 0, 1 must return 0", () => {
    expect(Gate.and(0, 1)).toBe(0);
  });

  test("Test AND Gate - Input: 1, 0 must return 0", () => {
    expect(Gate.and(1, 0)).toBe(0);
  });

  test("Test AND Gate - Input: 1, 1 must return 1", () => {
    expect(Gate.and(1, 1)).toBe(1);
  });
});

describe("Test Logic OR Gate", () => {
  test("Test OR Gate - Input: 0, 0 must return 0", () => {
    expect(Gate.or(0, 0)).toBe(0);
  });

  test("Test OR Gate - Input: 0, 1 must return 1", () => {
    expect(Gate.or(0, 1)).toBe(1);
  });

  test("Test OR Gate - Input: 1, 0 must return 1", () => {
    expect(Gate.or(1, 0)).toBe(1);
  });

  test("Test OR Gate - Input: 1, 1 must return 1", () => {
    expect(Gate.or(1, 1)).toBe(1);
  });
})

describe("Test Logic XOR Gate", () => {
  test("Test XOR Gate - Input: 0, 0 must return 0", () => {
    expect(Gate.xor(0, 0)).toBe(0);
  });

  test("Test XOR Gate - Input: 0, 1 must return 1", () => {
    expect(Gate.xor(0, 1)).toBe(1);
  });

  test("Test XOR Gate - Input: 1, 0 must return 1", () => {
    expect(Gate.xor(1, 0)).toBe(1);
  });

  test("Test XOR Gate - Input: 1, 1 must return 0", () => {
    expect(Gate.xor(1, 1)).toBe(0);
  });
});

describe("Test Logic XNOR Gate", () => {
  test("Test XNOR Gate - Input: 0, 0 must return 1", () => {
    expect(Gate.xnor(0, 0)).toBe(1);
  });

  test("Test XNOR Gate - Input: 0, 1 must return 0", () => {
    expect(Gate.xnor(0, 1)).toBe(0);
  });

  test("Test XNOR Gate - Input: 1, 0 must return 0", () => {
    expect(Gate.xnor(1, 0)).toBe(0);
  });

  test("Test XNOR Gate - Input: 1, 1 must return 1", () => {
    expect(Gate.xnor(1, 1)).toBe(1);
  });
});
