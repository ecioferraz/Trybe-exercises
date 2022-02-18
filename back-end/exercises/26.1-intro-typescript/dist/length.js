"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
utils_1.default.exec(units);
// const convert = (value: number, base: string, convert: string): number =>
//   utils.convert(units, value, base, convert);
// export default convert;
