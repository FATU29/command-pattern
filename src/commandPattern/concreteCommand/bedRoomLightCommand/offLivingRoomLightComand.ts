import { ICommand } from "../../icommand";
import { Light } from "../../receivers/light";

export class OffBedRoomLightCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
    console.log("OffBedRoomLightCommand");
  }

  undo(): void {
    this.light.on();
    console.log("OffBedRoomLightCommand");
  }
}
