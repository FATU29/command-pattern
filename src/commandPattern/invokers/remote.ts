import { NoCommand } from "../comands/nocommand";
import { ICommand } from "../icommand";

export class Remote {
  private CommandOn: ICommand[];
  private CommandOff: ICommand[];
  private readonly NoCommand: ICommand = new NoCommand();
  private History: ICommand;

  constructor() {
    this.CommandOn = new Array<ICommand>(7);
    this.CommandOff = new Array<ICommand>(7);
    for (let i = 0; i < 7; i++) {
      this.CommandOn[i] = this.NoCommand;
      this.CommandOff[i] = this.NoCommand;
    }
    this.History = this.NoCommand;
  }

  setRemote(slot: number, commandOn: ICommand, commandOff: ICommand) {
    this.CommandOn[slot] = commandOn;
    this.CommandOff[slot] = commandOff;
  }

  buttonClickOn(slot: number) {
    this.CommandOn[slot].execute();
    this.History = this.CommandOn[slot];
  }

  buttonClickOff(slot: number) {
    this.CommandOff[slot].execute();
    this.History = this.CommandOn[slot];
  }

  buttonClickUndo() {
    this.History.undo();
  }
}
