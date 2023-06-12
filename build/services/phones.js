"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const Phone_1 = require("../models/Phone");
const getById = (id) => {
    return Phone_1.Phone.findByPk(id);
};
exports.getById = getById;
