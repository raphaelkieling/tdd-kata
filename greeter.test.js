const greeter = require("./greeter");

describe("Greeter", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(global.console, "log").mockImplementation();
  });

  test("should return Hello cool", () => {
    const mockLog = jest.spyOn(global.console, "log").mockImplementation();

    jest.spyOn(global, "Date").mockImplementation(() => {
      return {
        getHours() {
          return 13;
        },
      };
    });

    const result = greeter("cool");
    expect(result).toBe("Hello Cool");
    expect(mockLog).toHaveBeenLastCalledWith("Hello Cool");
  });

  test("should return Hello cool and trim the input", () => {
    const mockLog = jest.spyOn(global.console, "log").mockImplementation();
    jest.spyOn(global, "Date").mockImplementation(() => {
      return {
        getHours() {
          return 13;
        },
      };
    });
    const result = greeter("   cool  ");
    expect(result).toBe("Hello Cool");
    expect(mockLog).toHaveBeenLastCalledWith("Hello Cool");
  });

  test("should captalize the first letter and return Hello Cool", () => {
    jest.spyOn(global, "Date").mockImplementation(() => {
      return {
        getHours() {
          return 13;
        },
      };
    });

    const result = greeter("cool");
    expect(result).toBe("Hello Cool");
  });

  test("should return Good morning Cool when the time is 06-12", () => {
    jest.spyOn(global, "Date").mockImplementation(() => {
      return {
        getHours() {
          return 6;
        },
      };
    });

    const result = greeter("cool");
    expect(result).toBe("Good morning Cool");
  });

  test("should return Good evening Cool when the time is 18-22", () => {
    jest.spyOn(global, "Date").mockImplementation(() => {
      return {
        getHours() {
          return 18;
        },
      };
    });

    const result = greeter("cool");
    expect(result).toBe("Good evening Cool");
  });

  test("should return Good night Cool when the time is 22-06", () => {
    jest.spyOn(global, "Date").mockImplementation(() => {
      return {
        getHours() {
          return 23;
        },
      };
    });

    const result = greeter("cool");
    expect(result).toBe("Good night Cool");
  });

  test("should return the result into a console.log", () => {
    const mockLog = jest.spyOn(global.console, "log").mockImplementation();
    const result = greeter("cool");
    expect(mockLog).toHaveBeenLastCalledWith(result);
  });
});
