import { Product } from "../models/Product";

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

export const getAll = () => {
  return Product.findAll();
}

export const getById = (id: number) => {
  return Product.findByPk(id);
};
