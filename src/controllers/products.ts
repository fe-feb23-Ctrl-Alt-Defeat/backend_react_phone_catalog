import { Request, Response } from "express";
import * as productService from "../services/products";
import { Product } from "../types/Product";

export const getAllProducts = async(req: Request, res: Response) => {
  const products = await productService.getAll();

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
