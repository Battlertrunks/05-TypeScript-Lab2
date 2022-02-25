import { HtmlGreeter } from "../src/HTMLGreeter";

describe("HTMLGreeter class", () => {
  test("Inherits the greeting property from parent", () => {
    const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(newHtmlGreeter.greeting).toBe("Hello");
  });
  test("the tagName property defaults to h1", () => {
    const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(newHtmlGreeter.tagName).toBe("h1");
  });
  test("the tagName property is set by the constructor to div", () => {
    const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello", "div");
    expect(newHtmlGreeter.tagName).toBe("div");
  });
  test("the greet method returns an appropriate string", () => {
    const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(newHtmlGreeter.greet("Gavin")).toBe("<h1>Hello, Gavin!<h1>");
  });
});
