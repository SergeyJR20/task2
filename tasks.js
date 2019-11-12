const consumer = require('./consumer');
const agent = require('./agent');
const manufacturer = require('./manufacturer');
const exportProduct = require('./exportProduct');

const prProduct = new manufacturer;
const getProduct = new consumer;
const trayProduct = new agent;

// eslint-disable-next-line no-unused-vars
let countPr3 = 0;
let countDos3 = 0;
let c = 0;
let d = 0;
let f = 0; 
const a = [];
const b = [];
const exP = [];
const ostCons = [];
const ostManuf = [];

for (let i = 0; i < 10; i++) {
  c = getProduct.need();
  d = prProduct.produce();
  ostCons[0] = 0;
  ostManuf[0] = 0;
  f = trayProduct.tray(c, d);
  ostCons[i + 1] = c - f;
  ostManuf[i + 1] = d - f;
  a[i] = d + ostManuf[i];
  b[i] = c + ostCons[i];
  const exProduct = new exportProduct(a[i], b[i]);
  exP[i] = exProduct;
}

console.table(exP);
 
for (let i = exP.length - 1; i > exP.length - 4; i--) {
  countPr3 += a[i] - ostManuf[i];
  countDos3 += exP[i].countDos;
}
console.log("Количество произведенного товара за последние 3 дня", countPr3);
console.log( "Количество доставленного товара за последние 3 дня", countDos3);