import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";
  constructor(newGreeting: string) {
    super(newGreeting);
  }
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}
