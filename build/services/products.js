"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPageAndOrder = exports.getById = exports.getAll = void 0;
const Product_1 = require("../models/Product");
const getAll = (orderBy = 'id', orderDir) => {
    return Product_1.Product.findAll({
        order: [[orderBy, orderDir]]
    });
};
exports.getAll = getAll;
const getById = (id) => {
    return Product_1.Product.findByPk(id);
};
exports.getById = getById;
const getByPageAndOrder = (page, limit, orderBy = 'id', orderDir = 'ASC') => {
    const offset = (page - 1) * limit;
    const properties = {
        offset,
        limit,
    };
    if (orderBy) {
        const order = [[orderBy, orderDir]];
        properties.order = order;
    }
    return Product_1.Product.findAndCountAll(properties);
};
exports.getByPageAndOrder = getByPageAndOrder;
