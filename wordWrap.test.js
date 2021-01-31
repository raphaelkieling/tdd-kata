const wordWrap = require("./wordWrap.js");

describe("Word Wrap", () => {
  test("should return empty when send empty", () => {
    expect(wordWrap("")).toBe("");
  });
});
