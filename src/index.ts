import { OffBedRoomLightCommand } from "./commandPattern/concreteCommand/bedRoomLightCommand/offLivingRoomLightComand";
import { OnBedRoomLightCommand } from "./commandPattern/concreteCommand/bedRoomLightCommand/onLivingRoomLightComand";
import { OffLivingRoomLightCommand } from "./commandPattern/concreteCommand/livingRoomLightCommand/offLivingRoomLightComand";
import { OnLivingRoomLightCommand } from "./commandPattern/concreteCommand/livingRoomLightCommand/onLivingRoomLightComand";
import { ICommand } from "./commandPattern/icommand";
import { Remote } from "./commandPattern/invokers/remote";
import { MacroCommand } from "./commandPattern/macroCommand";
import { Light } from "./commandPattern/receivers/light";

const remote: Remote = new Remote();

const CeilingLight = new Light();

const onCommandLivingRoom: ICommand = new OnLivingRoomLightCommand(
  CeilingLight
);

const offCommandLivingRoom: ICommand = new OffLivingRoomLightCommand(
  CeilingLight
);

const onCommandBedRoom: ICommand = new OnBedRoomLightCommand(CeilingLight);

const offCommandBedRoom: ICommand = new OffBedRoomLightCommand(CeilingLight);

const OnPartyMode: ICommand = new MacroCommand([
  onCommandLivingRoom,
  onCommandBedRoom,
]);

const OffPartyMode: ICommand = new MacroCommand([
  offCommandLivingRoom,
  offCommandBedRoom,
]);

remote.setRemote(0, onCommandLivingRoom, offCommandLivingRoom);
remote.setRemote(1, OnPartyMode, OffPartyMode);

remote.buttonClickOn(1);

console.log("===============");

remote.buttonClickUndo();
