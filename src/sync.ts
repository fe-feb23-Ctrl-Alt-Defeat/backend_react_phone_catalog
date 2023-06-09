import { readFile } from "fs";
import { Product } from "./models/Product";
import { dbInit } from "./utils/dbInit";

const seedInitialData = async () => {
  readFile('./src/dbInitInfo.json', async (err, data) => {
    if (err) throw err;
    const dataToLoad = JSON.parse(data.toString());
    console.log(dataToLoad);
    await Product.bulkCreate(dataToLoad);
  });
}

const sync = async () => {
  dbInit();
  
  await Product.sync({ alter: true });

  await seedInitialData();
}

sync();
