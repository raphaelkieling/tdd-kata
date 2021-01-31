const whereAreTheUpperCase = require("./whereAreTheUpper.js");

describe("Where are the upper", () => {
  test("should return [] when not found something", () => {
    expect(whereAreTheUpperCase("")).toEqual([]);
  });

  test("should return [] when put only lowercase", () => {
    expect(whereAreTheUpperCase("a")).toEqual([]);
    expect(whereAreTheUpperCase("abcde")).toEqual([]);
  });

  test("should return a array of index when put words with uppercase", () => {
    expect(whereAreTheUpperCase("AbC")).toEqual([0, 2]);
    expect(whereAreTheUpperCase("WorD Wrapper")).toEqual([0, 3, 5]);
  });
});
