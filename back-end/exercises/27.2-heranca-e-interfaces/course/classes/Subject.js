"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(name) {
        this._name = name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            (n.length < 3) ? console.log('O nome tem que possuir no mínimo 3 caracteres.') : this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
exports.default = Subject;
