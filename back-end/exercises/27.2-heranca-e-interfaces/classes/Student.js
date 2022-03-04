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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._grades = [];
        _this._workpapers = [];
        _this._registration = _this.generateRegistration();
        return _this;
    }
    Object.defineProperty(Student.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (r) {
            (r.length < 16) ? console.log('A matrícula deve possuir no mínimo 16 caracteres.') : this._registration = r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grades", {
        get: function () {
            return this._grades;
        },
        set: function (g) {
            (g.length > 4) ? console.log('A pessoa estudante só pode possuir 4 notas de provas.') : this._grades = g;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "workpapers", {
        get: function () {
            return this._workpapers;
        },
        set: function (w) {
            (w.length > 2) ? console.log('A pessoa estudante só pode possuir 2 notas de trabalho.') : this._workpapers = w;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sum = function () {
        return __spreadArray(__spreadArray([], this._grades, true), this._workpapers, true).reduce(function (acc, curr) { return acc += curr; });
    };
    Student.prototype.average = function () {
        var sumAllGrades = this.sum();
        var divide = this._grades.length + this._workpapers.length;
        return (sumAllGrades / divide).toFixed(2);
    };
    Student.prototype.generateRegistration = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU".concat(randomStr);
    };
    return Student;
}(Person_1.default));
exports.default = Student;
