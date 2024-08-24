import { GWModule } from "gateware-ts";

export class AndGate extends GWModule {
  a = this.addInput("a", 1);
  b = this.addInput("b", 1);
  y = this.addOutput("y", 1);

  description() {
    const { a, b, y } = this;

    this.combinationalProcess([y.setTo(a.and(b))]);
  }
};
