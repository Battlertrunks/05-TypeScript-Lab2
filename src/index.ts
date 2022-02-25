import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { HtmlGreeter } from "./HTMLGreeter";
import { LoudGreeter } from "./LoudGreeter";

const newGreeter: Greeter = new Greeter("Morning");
const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
  "Morning"
);
const newLoudGreeter: LoudGreeter = new LoudGreeter("Morning");
const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Morning");

console.log(newGreeter.greet("Gavin"));
console.log(newJavaScriptGreeter.greet("Gavin"));
console.log(newLoudGreeter.greet("Gavin"));
console.log(newHtmlGreeter.greet("Gavin"));
