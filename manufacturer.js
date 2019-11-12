class manufacturer {
  constructor(name) {
    this.name = name;
    this.prProduct = 0;
  }
  produce() {   
    this.prProduct = Math.floor(Math.random() * 100 + 50);
    return this.prProduct;
  }
}
module.exports = manufacturer;
