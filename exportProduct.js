const agent = require('./agent');
const trayProduct = new agent;

class exportProduct {
  constructor(a, b) {
    this.countPr = a;
    this.countPot = b;
    this.countDos = trayProduct.tray(a, b);
    this.KPD = Math.trunc((trayProduct.tray(a, b) / b) * 100);
  }
}
module.exports = exportProduct;