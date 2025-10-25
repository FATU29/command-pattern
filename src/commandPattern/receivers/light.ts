export class Light {
  private status: boolean;

  constructor() {
    this.status = false;
  }

  on() {
    this.status = true;
    console.log("on light");
  }
  off() {
    this.status = false;
    console.log("off light");
  }
}
