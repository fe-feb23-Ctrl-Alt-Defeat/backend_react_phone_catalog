import { Product } from "../models/Product";

type RequestProps = {
  offset: number;
  limit: number;
  order?: string | undefined;
}

export const getAll = () => {
  return Product.findAll();
};

export const getById = (id: number) => {
  return Product.findByPk(id);
};

export const getByPageAndOrder = (
  page: number, 
  limit: number,
  orderBy?: string,
) => {
  const offset = (page - 1) * limit;

  const properties: RequestProps = {
    offset,
    limit,
  }

  if (orderBy) {
    properties.order = orderBy;
  }
  
  return Product.findAndCountAll({
    offset,
    limit,
  })
};
