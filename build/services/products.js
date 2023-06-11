"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPage = exports.getById = exports.getAll = void 0;
const Product_1 = require("../models/Product");
// export const getFilteredProducts = ({
//   itemId,
//   name,
//   fullPrice,
//   price,
//   capacity,
//   color,
//   ram,
//   year,
// }: Product) => {
//   let filteredPhones = phones;
//   switch (true) {
//     case !!itemId:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.itemId === itemId
//       ));
//     case !!name:
//       return (filteredPhones = filteredPhones.filter((phone) =>
//         phone.name.toLowerCase().includes(name.toLowerCase())
//       ));
//     case !!fullPrice:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.fullPrice === fullPrice
//       ));
//     case !!price:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.price === price
//       ));
//     case !!capacity:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.capacity === capacity
//       ));
//     case !!color:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.color === color
//       ));
//     case !!ram:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.ram === ram
//       ));
//     case !!year:
//       return (filteredPhones = filteredPhones.filter(
//         (phone) => phone.year === year
//       ));
//     default:
//       return filteredPhones;
//   }
// };
const getAll = () => {
    return Product_1.Product.findAll();
};
exports.getAll = getAll;
const getById = (id) => {
    return Product_1.Product.findByPk(id);
};
exports.getById = getById;
const getByPage = (page, limit) => {
    const offset = (page - 1) * limit;
    return Product_1.Product.findAndCountAll({
        offset,
        limit,
    });
};
exports.getByPage = getByPage;
