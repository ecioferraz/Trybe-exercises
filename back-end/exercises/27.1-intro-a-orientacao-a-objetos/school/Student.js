"use strict";
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
var Student = /** @class */ (function () {
    function Student(_enrollment, _name, _examGrades, _paperGrades) {
        if (_examGrades === void 0) { _examGrades = []; }
        if (_paperGrades === void 0) { _paperGrades = []; }
        this._enrollment = _enrollment;
        this._name = _name;
        this._examGrades = _examGrades;
        this._paperGrades = _paperGrades;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examGrades", {
        get: function () {
            return this._examGrades;
        },
        set: function (value) {
            if (value.length > 4)
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
            this._examGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "paperGrades", {
        get: function () {
            return this._paperGrades;
        },
        set: function (value) {
            if (value.length > 2)
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalho.');
            this._paperGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function (examGrades, paperGrades) {
        return __spreadArray(__spreadArray([], examGrades, true), paperGrades, true).reduce(function (sum, grade) { return sum += grade; });
    };
    Student.prototype.gradesAverage = function () {
        var gradesSum = this.sumGrades(this.examGrades, this.paperGrades);
        var divisor = this.examGrades.length + this.paperGrades.length;
        return (gradesSum / divisor).toFixed(2);
    };
    return Student;
}());
exports.default = Student;
var student1 = new Student('123456789', 'Écio');
console.log(student1);
console.log(student1.enrollment);
console.log(student1.name);
student1.name = 'test';
console.log(student1.name);
