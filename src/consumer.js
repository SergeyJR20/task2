"use strict";
var consumer = /** @class */ (function () {
    function consumer() {
        // this.name = name;
        this.getProduct = 0;
    }
    consumer.prototype.need = function () {
        this.getProduct = Math.floor(Math.random() * 50 + 70);
        return this.getProduct;
    };
    return consumer;
}());
module.exports = consumer;
//# sourceMappingURL=consumer.js.map