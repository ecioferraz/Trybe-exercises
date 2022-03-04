"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._registration = String();
        _this._salary = Number();
        _this._subject = subject;
        _this.salary = salary;
        _this._admissionDate = new Date();
        _this.registration = _this.generateRegistration();
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (s) {
            this._subject = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (r) {
            (r.length < 16) ? console.log('O registro deve possuir no mínimo 16 caracteres.') : this._registration = r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (s) {
            (s < 0) ? console.log('O salário não pode ser negativo.') : this._salary = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "admissionDate", {
        get: function () {
            return this._admissionDate;
        },
        set: function (aD) {
            (aD.getTime() > new Date().getTime()) ? console.log('A data de admissão não pode ser uma data no futuro.') : this._admissionDate = aD;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.generateRegistration = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "PRF".concat(randomStr);
    };
    return Teacher;
}(Person_1.default));
exports.default = Teacher;
