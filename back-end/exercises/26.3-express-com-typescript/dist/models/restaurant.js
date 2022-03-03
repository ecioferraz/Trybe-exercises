"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const create = (restaurant) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield (0, functions_1.read)();
    const id = restaurants[restaurants.length - 1].id;
    const newRestaurant = Object.assign({ id }, restaurant);
    restaurants.push(newRestaurant);
    yield (0, functions_1.write)(restaurants);
    return newRestaurant;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return (0, functions_1.read)(); });
exports.default = {
    create,
    getAll,
};
//# sourceMappingURL=restaurant.js.map