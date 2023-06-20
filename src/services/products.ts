import { Order } from "sequelize";
import { Product } from "../models/Product";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";

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

export const getByItemId = (itemId: string) => {
  return Product.findAll({
    where: {
      itemId,
    }
  });
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

export const getDiscount = () => {
  return Product.findAll({
    order: [[Sequelize.literal('"Product"."fullPrice" - "Product"."price"'), 'DESC']],
    limit: 16,
  })
}

export const getFilteredByProductType = (productType: string) => {
  return Product.findAll({
    where: {
      category: productType,
    }
  })
}

export const getLength = () => {
  return Product.count();
}

export const getBySearchParam = (search: string) => {
  return Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${search}%`,
      },
    }
  })
}
