import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("greeting is set by the constructor", () => {
    const newGreater: Greeter = new Greeter("Hello");
    expect(newGreater.greeting).toBe("Hello");
  });
  test("greeting returns a greet", () => {
    const newGreater: Greeter = new Greeter("Hello");
    expect(newGreater.greet("Gavin")).toBe("Hello, Gavin!");
  });
});
