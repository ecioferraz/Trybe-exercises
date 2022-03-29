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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, birthDate, salary) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = String();
        _this._salary = Number();
        _this._salary = salary;
        _this._admissionDate = new Date();
        _this._enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Employee.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (e) {
            (e.length < 16) ? console.log('O registro deve possuir no mínimo 16 caracteres.') : this._enrollment = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (s) {
            (s < 0) ? console.log('O salário não pode ser negativo.') : this._salary = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "admissionDate", {
        get: function () {
            return this._admissionDate;
        },
        set: function (aD) {
            (aD.getTime() > new Date().getTime()) ? console.log('A data de admissão não pode ser uma data no futuro.') : this._admissionDate = aD;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "FUNC".concat(randomStr);
    };
    return Employee;
}(Person_1.default));
exports.default = Employee;
