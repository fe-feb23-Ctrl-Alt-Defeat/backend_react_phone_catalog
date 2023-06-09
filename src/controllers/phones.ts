import { Request, Response } from 'express';
import * as phonesService from '../services/phones';
import { Phone } from '../types/Phone';

export const getAllPhones = (req: Request, res: Response) => {
  if (!req.body) {
    return null;
  }

  const phones = phonesService.getFilteredPhones(<Phone><unknown>req.body);

  res.send(phones);
};

export const getOnePhoneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundedPhone = phonesService.getPhoneById(id);

  if (!foundedPhone) {
    res.status(404).send('Phone not found');
  }

  res.status(200).send(foundedPhone);
};