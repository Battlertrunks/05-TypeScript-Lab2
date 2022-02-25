import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("Inherits the greeting property from parent", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(newLoudGreeter.greeting).toBe("Hello");
  });

  test("extra property starts with an initial value", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(newLoudGreeter.greet("Gavin")).toBe("Hello, Gavin!!");
  });

  test("addVolume adds extra appropriately", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    newLoudGreeter.addVolume();
    newLoudGreeter.addVolume();
    expect(newLoudGreeter.greet("Gavin")).toBe("Hello, Gavin!!!!");
  });
});
