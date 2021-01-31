const stringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(global.console, "log").mockImplementation();
  });

  test("should return 0 when empty", () => {
    const result = stringCalculator("");
    expect(result).toBe(0);
  });

  test("should return 1 when string is 1", () => {
    const result = stringCalculator("1");
    expect(result).toBe(1);
  });

  test("should return 2 when string is 2", () => {
    const result = stringCalculator("2");
    expect(result).toBe(2);
  });

  test("should return 3 when send 1,2", () => {
    const result = stringCalculator("1,2");
    expect(result).toBe(3);
  });

  test("should return 3 when send 1\n2", () => {
    const result = stringCalculator("1\n2");
    expect(result).toBe(3);
  });

  test("should return 'negatives not allowed: -1,-3' when send -1,2,-3", () => {
    const result = stringCalculator("-1,2,-3");
    expect(result).toBe("negatives not allowed: -1,-3");
  });

  test("should ignore nubmer greater than 1000", () => {
    const result = stringCalculator("1001");
    expect(result).toBe(undefined);
  });

  test("should ignore nubmer greater than 1000 while sum", () => {
    const result = stringCalculator("1001,10");
    expect(result).toBe(10);
  });

  test("should sum with a custom single delimiter", () => {
    const result = stringCalculator("//#\n1#2");
    expect(result).toBe(3);
  });

  test("should sum with a custom multi delimiter", () => {
    const result = stringCalculator("//###\n1###2");
    expect(result).toBe(3);
  });

  test("should sum with a custom multi delimiter using words", () => {
    const result = stringCalculator("//dd\n1dd2");
    expect(result).toBe(3);
  });
});
