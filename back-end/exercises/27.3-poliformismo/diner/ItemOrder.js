"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemOrder = /** @class */ (function () {
    function ItemOrder(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    Object.defineProperty(ItemOrder.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemOrder.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return ItemOrder;
}());
exports.default = ItemOrder;
