"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_1 = __importDefault(require("../controllers/restaurant"));
const router = (0, express_1.Router)();
router.route('/')
    .post(restaurant_1.default.create)
    .get(restaurant_1.default.getAll);
exports.default = router;
//# sourceMappingURL=restaurant.js.map