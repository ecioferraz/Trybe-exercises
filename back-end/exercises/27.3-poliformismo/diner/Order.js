"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(_client, _item, _paymentMethod, _discount) {
        if (_discount === void 0) { _discount = 0; }
        this._client = _client;
        this._item = _item;
        this._paymentMethod = _paymentMethod;
        this._discount = _discount;
    }
    Object.defineProperty(Order.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (value) {
            this._item = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "paymentMethod", {
        get: function () {
            return this._paymentMethod;
        },
        set: function (value) {
            this._paymentMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.getTotal = function () {
        return this._item.reduce(function (total, item) { return total += item.price; }, 0);
    };
    Order.prototype.totalWithDiscount = function () {
        return this.getTotal() - (this.discount * this.getTotal());
    };
    return Order;
}());
exports.default = Order;
