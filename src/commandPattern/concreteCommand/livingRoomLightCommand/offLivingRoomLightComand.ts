import { ICommand } from "../../icommand";
import { Light } from "../../receivers/light";

export class OffLivingRoomLightCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
