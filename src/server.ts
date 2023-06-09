import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/products";
import { dbInit } from "./utils/dbInit";
import path from 'path';

const app = express();

const PORT = process.env.PORT || 5000;

dbInit();

app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);
app.use(express.static(path.resolve('public')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
