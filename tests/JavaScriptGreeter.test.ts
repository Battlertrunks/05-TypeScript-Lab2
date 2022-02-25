import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("Inherits the greeting property from parent", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Hello"
    );
    expect(newJavaScriptGreeter.greeting).toBe("Hello");
  });
  test("The greet method was properly overwritten", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Hello"
    );
    expect(newJavaScriptGreeter.greet("Gavin")).toBe(
      `console.log("Hello, Gavin!");`
    );
  });
});
