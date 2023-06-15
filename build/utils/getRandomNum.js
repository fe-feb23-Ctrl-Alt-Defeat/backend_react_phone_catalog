"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNum = void 0;
const getRandomNum = (ceil) => {
    return Math.ceil(Math.random() * (ceil - 1)) + 1;
};
exports.getRandomNum = getRandomNum;
