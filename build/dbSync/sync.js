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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbInit_1 = require("../utils/dbInit");
const Phone_1 = require("../models/Phone");
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    // fs.readFile('./products.json', async (err, data) => {
    //   if (err) throw err;
    //   const dataToLoad = JSON.parse(data.toString());
    //   console.log(dataToLoad);
    //   await Product.bulkCreate(dataToLoad);
    // });
    const phones = [];
    const jsonsInDir = fs_1.default
        .readdirSync('./src/dbSync/phones')
        .filter(file => path_1.default.extname(file) === '.json');
    jsonsInDir.forEach(file => {
        const fileData = fs_1.default.readFileSync(path_1.default.join('./src/dbSync/phones', file));
        const json = JSON.parse(fileData.toString());
        phones.push(json);
    });
    yield Phone_1.Phone.bulkCreate(phones);
});
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbInit_1.dbInit)();
    // await Product.sync({ alter: true });
    yield Phone_1.Phone.sync({ alter: true });
    yield seedInitialData();
});
// seedInitialData();
sync();
