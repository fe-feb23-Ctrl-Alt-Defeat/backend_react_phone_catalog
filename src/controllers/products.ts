import { Request, Response } from "express";
import * as productService from "../services/products";
import { getRandomNum } from "../utils/getRandomNum";
export const getProducts = async(req: Request, res: Response) => {
  const {
    page, 
    limit, 
    orderBy, 
    orderDir = 'ASC', 
    ids,
    productType,
  } = req.query;
  const isRequestBad = ((page && !limit) || (!page && limit))
    || ((orderDir !== 'ASC' && orderDir !== 'DESC'));
  const sortedBy = orderBy?.toString();

  if (isRequestBad) {
    res.sendStatus(400);

    return;
  }

  if (productType) {
    try {
      const products = await productService
      .getFilteredByProductType(productType.toString())

      res.send(products);

      return;
    } catch {
      res.send([]);

      return;
    }
  }
  
  if (ids) {
    if (ids.toString().length === 0 && ids === undefined) {
      res.send([]);

      return;
    }

    const idsArray = ids.toString().split(',').map(id => Number(id));
    const products = await productService.getByIds(idsArray);

    res.send(products);

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

export const getOneByItemId = async(req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundProduct = await productService.getByItemId(itemId);

  if (foundProduct.length === 0) {
    res.sendStatus(404);
    return;
  }

  res.send(foundProduct[0]);
};

export const getDiscount = async(req: Request, res: Response) => {
  const products = await productService.getDiscount();

  res.send(products);
};

export const getRecommended = async(req: Request, res: Response) => {
  const recommendedIds: number[] = [];
  const length = await productService.getLength();

  while (recommendedIds.length !== 16) {
    const randomNum = getRandomNum(length);

    if (!recommendedIds.includes(randomNum)) {
      recommendedIds.push(randomNum);
    }
  }

  const products = await productService.getByIds(recommendedIds);

  res.send(products);
}
