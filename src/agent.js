class Agent {
  tray(a, b) {
    if (b < 100) {
      this.trayProduct = b;
    } else {
      this.trayProduct = 100;
    }
    if (a < this.trayProduct) {
      this.trayProduct = a;
    }
    return this.trayProduct;
  }

  constructor(name) {
    this.trayProduct = 0;
    this.name = name;
  }
}
module.exports = Agent;
