"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = String();
        this._birthDate = new Date();
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            if (n.length < 3)
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (d) {
            this.validateBirthDate(d);
            this._birthDate = d;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (d) {
        var diff = Math.abs(new Date().getTime() - d.getTime());
        var yearMs = 31536000000;
        return Math.floor(diff / yearMs);
    };
    Person.prototype.validateBirthDate = function (d) {
        if (d.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(d) > 120)
            throw new Error('A pessoa deve ter no máximo 120 anos.');
    };
    return Person;
}());
exports.default = Person;
