const romanConverter = require("./romanConverter.js");

describe("Roman Coverter", () => {
  test("should return empty string when send empty", () => {
    expect(romanConverter("")).toBe("");
  });

  test("should return I,II,III string when send 1,2,3", () => {
    expect(romanConverter(1)).toBe("I");
    expect(romanConverter(2)).toBe("II");
    expect(romanConverter(3)).toBe("III");
  });

  test("should return IV string when send 4", () => {
    expect(romanConverter(1)).toBe("I");
    expect(romanConverter(2)).toBe("II");
    expect(romanConverter(3)).toBe("III");
  });
});
