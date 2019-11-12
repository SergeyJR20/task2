class consumer {
  constructor(name) {
    this.name = name;
    this.getProduct = 0;
  }
  need() {
  this.getProduct = Math.floor(Math.random() * 50 + 70);
  return this.getProduct;
}
}
module.exports = consumer;