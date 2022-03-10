"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateFormat = /** @class */ (function () {
    function DateFormat(_day, _month, _year) {
        this._day = _day;
        this._month = _month;
        this._year = _year;
        var date = "".concat(this.year, "/").concat(this.month, "/").concat(this.day);
        if (new Date(date).getDate() !== this.day) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        }
    }
    Object.defineProperty(DateFormat.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            this._day = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateFormat.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateFormat.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    DateFormat.prototype.getMonthName = function () {
        var months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ];
        return months[this.month - 1];
    };
    DateFormat.prototype.isLeapYear = function () {
        return new Date(this.year, 1, 29).getDate() === 29;
        // https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
    };
    DateFormat.prototype.compare = function (date) {
        var currDate = "".concat(this.year, "/").concat(this.month, "/").concat(this.day);
        var dateCompared = "".concat(date.year, "/").concat(date.month, "/").concat(date.day);
        if (new Date(currDate) > new Date(dateCompared))
            return 1;
        if (new Date(currDate) < new Date(dateCompared))
            return -1;
        return 0;
    };
    DateFormat.prototype.format = function (formatting) {
        var conditions = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g)) && !formatting.match(/M{1}/g),
            (!formatting.match(/d{2,4}/g)),
        ];
        if (conditions.every(function (condition) { return condition; })) {
            console.log("O formato passado \u00E9 inv\u00E1lido: ".concat(formatting));
        }
        var day = this.day > 9 ? this.day.toString() : "0".concat(this.day.toString());
        var month = this.month > 9 ? this.month.toString() : "0".concat(this.month.toString());
        var year = this.year.toString();
        var dateFormatting = formatting
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substring(-2));
        return dateFormatting;
    };
    return DateFormat;
}());
exports.default = DateFormat;
var bday = new DateFormat(24, 7, 1991);
var today = new DateFormat(4, 3, 2022);
var compared = bday.compare(today);
var compareStates = ['anterior', 'igual', 'posterior'];
var invalidDate = new DateFormat(31, 2, 2022);
console.log(bday);
console.log("Dia: ".concat(bday.day));
console.log("M\u00EAs: ".concat(bday.month));
console.log("M\u00EAs por extenso: ".concat(bday.getMonthName()));
console.log("Ano: ".concat(bday.year));
console.log("\u00C9 ano bissexto: ".concat(bday.isLeapYear() ? 'Sim' : 'Não'));
console.log("A primeira data \u00E9 ".concat(compareStates[compared + 1], " a segunda."));
console.log(bday.format('dd/mm/aaaa'));
console.log(bday.format('dd-mm-aaaa'));
console.log(bday.format('aaaa/mm/dd'));
console.log(bday.format('aaaa-mm-dd'));
console.log(bday.format('dd de M de aa'));
console.log(bday.format('dd, M de aaaa'));
console.log(invalidDate.format('a m d'));
