import { Request, Response } from "express";
import * as productService from "../services/products";
import { Product } from "../types/Product";

export const getAllProducts = async(req: Request, res: Response) => {
  const products = await productService.getAll();
  const { page, limit } = req.query;

  if (page && limit) {
    const startValue = (Number(page) - 1) * Number(limit);
    const slicedProducts = products.slice(startValue, startValue + Number(limit));

    res.send(slicedProducts);

    return;
  }

  res.send(products);
};

export const getOneById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const foundPhone = await productService.getById(+id);

  if (!foundPhone) {
    res.sendStatus(404);
    return;
  }

  res.send(foundPhone);
};
