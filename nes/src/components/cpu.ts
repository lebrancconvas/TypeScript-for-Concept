import { Bus } from "./bus";

export class CPU {
  private _bus: Bus | undefined;

  constructor() {
    this._bus = undefined;
  }

  connectBus(bus: Bus) {
    this._bus = bus;
  }

};
