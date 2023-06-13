import { Order } from "sequelize";
import { Product } from "../models/Product";

type RequestProps = {
  offset: number;
  limit: number;
  order?: Order;
}

type OrderDirection = 'ASC' | 'DESC';

export const getAll = (orderBy: string = 'id', orderDir: OrderDirection) => {
  return Product.findAll({
    order: [[orderBy, orderDir]]
  });
};

export const getByIds = (ids: number[]) => {
  return Product.findAll({
    where: {
      id: ids,
    }
  })
}

export const getById = (id: number) => {
  return Product.findByPk(id);
};

export const getByPageAndOrder = (
  page: number, 
  limit: number,
  orderBy: string = 'id',
  orderDir: OrderDirection = 'ASC',
) => {
  const offset = (page - 1) * limit;
  const properties: RequestProps = {
    offset,
    limit,
  }

  if (orderBy) {
    const order: Order = [[orderBy, orderDir]];

    properties.order = order;
  }

  return Product.findAndCountAll(properties)
};
