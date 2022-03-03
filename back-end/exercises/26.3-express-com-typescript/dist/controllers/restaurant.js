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
const services_1 = require("../services");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurant = req.body;
    const newRestaurant = yield services_1.RestaurantServices.create(restaurant);
    return res.status(201).json(newRestaurant);
});
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield services_1.RestaurantServices.getAll();
    return res.status(200).json(restaurants);
});
exports.default = {
    create,
    getAll,
};
//# sourceMappingURL=restaurant.js.map