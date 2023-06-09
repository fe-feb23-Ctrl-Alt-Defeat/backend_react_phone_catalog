import express from "express";
import * as phonesController from "../controllers/products";

export const productsRouter = express.Router();

productsRouter.get("/", phonesController.getAllProducts);
productsRouter.get("/:id", phonesController.getOneById);
