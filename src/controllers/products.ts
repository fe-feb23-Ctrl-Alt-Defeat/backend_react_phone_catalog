import { Request, Response } from "express";
import * as productService from "../services/products";
export const getProducts = async(req: Request, res: Response) => {
  const { page, limit, orderBy, orderDir = 'ASC' } = req.query;
  if (req.body.ids && !page && !limit && !orderBy && orderDir!== 'ASC') {
    const { ids }: {ids: number[]} = req.body;

    console.log(req.body);

    const products = await productService.getByIds(ids);

    res.send(products);

    return;
  }
  
  
  const isRequestBad = ((page && !limit) || (!page && limit))
    || ((orderDir !== 'ASC' && orderDir !== 'DESC'));
  const sortedBy = orderBy?.toString();

  if (isRequestBad) {
    res.sendStatus(400);

    return;
  }

  if (page && limit) {
    const slicedProducts = await productService.getByPageAndOrder(
      Number(page), 
      Number(limit),
      sortedBy,
      orderDir,
    )

    res.send(slicedProducts);

    return;
  }

  const products = await productService.getAll(sortedBy, orderDir);

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
