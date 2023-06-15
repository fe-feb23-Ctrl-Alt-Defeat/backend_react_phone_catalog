import express from "express";
import * as productsController from "../controllers/products";

export const productsRouter = express.Router();

productsRouter.get("/", productsController.getProducts);
productsRouter.get("/discount", productsController.getDiscount);
productsRouter.get("/:itemId", productsController.getOneByItemId);
