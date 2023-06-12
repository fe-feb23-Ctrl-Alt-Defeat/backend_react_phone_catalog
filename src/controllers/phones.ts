import { Request, Response } from "express";
import * as phonesService from "../services/phones";

export const getOneById = async(req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundPhone = await phonesService.getById(itemId);

  if (!foundPhone) {
    res.sendStatus(404);
    return;
  }

  res.send(foundPhone);
};
