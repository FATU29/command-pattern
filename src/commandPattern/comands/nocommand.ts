import { ICommand } from "../icommand";

export class NoCommand implements ICommand {
  execute(): void {
    console.log("no execute");
  }
  undo(): void {
    console.log("no undo");
  }
}
