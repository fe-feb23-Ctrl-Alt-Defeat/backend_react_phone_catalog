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
const fs_1 = require("fs");
const Product_1 = require("./models/Product");
const dbInit_1 = require("./utils/dbInit");
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, fs_1.readFile)('./src/dbInitInfo.json', (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            throw err;
        const dataToLoad = JSON.parse(data.toString());
        console.log(dataToLoad);
        yield Product_1.Product.bulkCreate(dataToLoad);
    }));
});
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbInit_1.dbInit)();
    yield Product_1.Product.sync({ alter: true });
    yield seedInitialData();
});
sync();
