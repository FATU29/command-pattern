import { ICommand } from "../../icommand";
import { Light } from "../../receivers/light";

export class OnBedRoomLightCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
    console.log("OnBedRoomLightCommand");
  }

  undo(): void {
    this.light.off();
    console.log("OnBedRoomLightCommand");
  }
}
