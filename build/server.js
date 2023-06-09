"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = require("./routes/products");
const dbInit_1 = require("./utils/dbInit");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, dbInit_1.dbInit)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/products", products_1.productsRouter);
app.use(express_1.default.static(path_1.default.resolve('public')));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
