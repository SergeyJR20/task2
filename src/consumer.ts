class consumer {
  name: any 
  getProduct: any
  constructor() {
    // this.name = name;
    this.getProduct = 0;
  }
  need() {
  this.getProduct = Math.floor(Math.random() * 50 + 70);
  return this.getProduct;
}
}
export = consumer;