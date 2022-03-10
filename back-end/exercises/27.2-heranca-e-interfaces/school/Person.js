"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        if (_name === void 0) { _name = String(); }
        if (_birthDate === void 0) { _birthDate = new Date(); }
        this._name = _name;
        this._birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3)
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validateBirthDate(value);
            this._birthDate = value;
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
