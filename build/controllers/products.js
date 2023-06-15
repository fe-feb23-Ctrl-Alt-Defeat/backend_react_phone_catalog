"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getRecommended = exports.getDiscount = exports.getOneByItemId = exports.getProducts = void 0;
const productService = __importStar(require("../services/products"));
const getRandomNum_1 = require("../utils/getRandomNum");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, orderBy, orderDir = 'ASC', ids, productType, } = req.query;
    const isRequestBad = ((page && !limit) || (!page && limit))
        || ((orderDir !== 'ASC' && orderDir !== 'DESC'));
    const sortedBy = orderBy === null || orderBy === void 0 ? void 0 : orderBy.toString();
    if (isRequestBad) {
        res.sendStatus(400);
        return;
    }
    if (productType) {
        try {
            const products = yield productService
                .getFilteredByProductType(productType.toString());
            res.send(products);
            return;
        }
        catch (_a) {
            res.send([]);
            return;
        }
    }
    if (ids) {
        if (ids.toString().length === 0 && ids === undefined) {
            res.send([]);
            return;
        }
        const idsArray = ids.toString().split(',').map(id => Number(id));
        const products = yield productService.getByIds(idsArray);
        res.send(products);
        return;
    }
    if (page && limit) {
        const slicedProducts = yield productService.getByPageAndOrder(Number(page), Number(limit), sortedBy, orderDir);
        res.send(slicedProducts);
        return;
    }
    const products = yield productService.getAll(sortedBy, orderDir);
    res.send(products);
});
exports.getProducts = getProducts;
const getOneByItemId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.params;
    const foundProduct = yield productService.getByItemId(itemId);
    if (foundProduct.length === 0) {
        res.sendStatus(404);
        return;
    }
    res.send(foundProduct[0]);
});
exports.getOneByItemId = getOneByItemId;
const getDiscount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productService.getDiscount();
    res.send(products);
});
exports.getDiscount = getDiscount;
const getRecommended = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recommendedIds = [];
    const length = yield productService.getLength();
    while (recommendedIds.length !== 16) {
        const randomNum = (0, getRandomNum_1.getRandomNum)(length);
        if (!recommendedIds.includes(randomNum)) {
            recommendedIds.push(randomNum);
        }
    }
    const products = yield productService.getByIds(recommendedIds);
    res.send(products);
});
exports.getRecommended = getRecommended;
