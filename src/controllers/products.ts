import { Request, Response } from "express";
import * as productService from "../services/products";

export const getAllProducts = async(req: Request, res: Response) => {
  const { page, limit } = req.query;

  if ((page && !limit) || (!page && limit)) {
    res.sendStatus(400);
    return;
  }

  if (page && limit) {
    const slicedProducts = await productService.getByPage(
      Number(page), 
      Number(limit),
    );

    res.send(slicedProducts);

    return;
  }

  const products = await productService.getAll();

  res.send(products);
};


export const getOneById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const foundProduct = await productService.getById(+id);

  if (!foundProduct) {
    res.sendStatus(404);
    return;
  }

  res.send(foundProduct);
};
