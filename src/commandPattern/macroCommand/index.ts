import { ICommand } from "../icommand";

export class MacroCommand implements ICommand {
  private Commands: ICommand[];

  constructor(Commands: ICommand[]) {
    this.Commands = Commands;
  }

  execute(): void {
    for (let i = 0; i < this.Commands.length; i++) {
      this.Commands[i].execute();
    }
  }

  undo(): void {
    for (let i = 0; i < this.Commands.length; i++) {
      this.Commands[i].undo();
    }
  }
}
