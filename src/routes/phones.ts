import express from 'express';
import * as phonesController from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/', phonesController.getAllPhones);
phonesRouter.get('/:id', phonesController.getOnePhoneById);