"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const middlewares_1 = require("./middlewares");
const restaurant_1 = __importDefault(require("./routes/restaurant"));
dotenv_1.default.config();
const { PORT = 3000 } = process.env;
app_1.default.use('/restaurants', restaurant_1.default);
app_1.default.use(middlewares_1.ErrorMid);
app_1.default.listen(PORT, () => {
    console.log(`🚀  mission to mars running in port ${PORT}`);
});
//# sourceMappingURL=index.js.map