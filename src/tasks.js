const Consumer = require('./consumer');
const Agent = require('./agent');
const Manufacturer = require('./manufacturer');
const ExportProduct = require('./exportProduct');

const prProduct = new Manufacturer();
const getProduct = new Consumer();
const trayProduct = new Agent();

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

for (let i = 0; i < 10; i += 1) {
  c = getProduct.need();
  d = prProduct.produce();
  ostCons[0] = 0;
  ostManuf[0] = 0;
  f = trayProduct.tray(c, d);
  ostCons[i + 1] = c - f;
  ostManuf[i + 1] = d - f;
  a[i] = d + ostManuf[i];
  b[i] = c + ostCons[i];
  const exProduct = new ExportProduct(a[i], b[i]);
  exP[i] = exProduct;
}

console.table(exP);
for (let i = exP.length - 1; i > exP.length - 4; i -= 1) {
  countPr3 += a[i] - ostManuf[i];
  countDos3 += exP[i].countDos;
}
console.log('Количество произведенного товара за последние 3 дня', countPr3);
console.log('Количество доставленного товара за последние 3 дня', countDos3);
