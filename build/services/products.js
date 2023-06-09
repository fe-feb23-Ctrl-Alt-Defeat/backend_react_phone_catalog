"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBySearchParam = exports.getLength = exports.getFilteredByProductType = exports.getDiscount = exports.getByPageAndOrder = exports.getByItemId = exports.getByIds = exports.getAll = void 0;
const Product_1 = require("../models/Product");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const getAll = (orderBy = 'id', orderDir) => {
    return Product_1.Product.findAll({
        order: [[orderBy, orderDir]]
    });
};
exports.getAll = getAll;
const getByIds = (ids) => {
    return Product_1.Product.findAll({
        where: {
            id: ids,
        }
    });
};
exports.getByIds = getByIds;
const getByItemId = (itemId) => {
    return Product_1.Product.findAll({
        where: {
            itemId,
        }
    });
};
exports.getByItemId = getByItemId;
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
const getDiscount = () => {
    return Product_1.Product.findAll({
        order: [[sequelize_typescript_1.Sequelize.literal('"Product"."fullPrice" - "Product"."price"'), 'DESC']],
        limit: 16,
    });
};
exports.getDiscount = getDiscount;
const getFilteredByProductType = (productType) => {
    return Product_1.Product.findAll({
        where: {
            category: productType,
        }
    });
};
exports.getFilteredByProductType = getFilteredByProductType;
const getLength = () => {
    return Product_1.Product.count();
};
exports.getLength = getLength;
const getBySearchParam = (search) => {
    return Product_1.Product.findAll({
        where: {
            name: {
                [sequelize_1.Op.iLike]: `%${search}%`,
            },
        }
    });
};
exports.getBySearchParam = getBySearchParam;
