"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const convert = (units, value, base, convert) => {
    const baseIndex = units.indexOf(base);
    const convertIndex = units.indexOf(convert);
    const exp = (convertIndex - baseIndex);
    return value * (10 ** exp);
};
const exec = (units) => {
    const value = readline_sync_1.default.questionFloat('Digite um valor:\n');
    const baseChosen = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a unidade base:', { cancel: 'SAIR' });
    if (baseChosen === -1)
        return console.log('Saindo!');
    const convertChosen = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a conversão:', { cancel: 'SAIR' });
    if (convertChosen === -1)
        return console.log('Saindo!');
    const base = units[baseChosen];
    const convertTo = units[convertChosen];
    const converted = convert(units, value, base, convertTo);
    const msg = `${value}${base} é igual a ${converted}${convertTo}`;
    console.log(msg);
};
exports.default = {
    convert,
    exec,
};
