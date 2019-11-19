function Manufacturer(name) {
  this.name = name;
  this.prProduct = 0;
}

Object.defineProperty(Manufacturer, 'name', {
  get function() {
    return this.name;
  },
  set function(value) {
    this.name = value;
  },
});

Manufacturer.prototype.produce = function produce() {
  this.prProduct = Math.floor(Math.random() * 100 + 50);
  return this.prProduct;
};

module.exports = Manufacturer;
