import fs from "fs";
import  path from "path";
import { Product } from "../models/Product";
import { dbInit } from "../utils/dbInit";
import { Phone } from "../models/Phone";

const seedInitialData = async () => {
  // fs.readFile('./products.json', async (err, data) => {
  //   if (err) throw err;
  //   const dataToLoad = JSON.parse(data.toString());
  //   console.log(dataToLoad);
  //   await Product.bulkCreate(dataToLoad);
  // });

  const phones: any[] = [];
  const jsonsInDir = fs
    .readdirSync('./src/dbSync/phones')
    .filter(file => path.extname(file) === '.json');

  jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('./src/dbSync/phones', file));
    const json = JSON.parse(fileData.toString());
    phones.push(json)
  });

  await Phone.bulkCreate(phones);
}

const sync = async () => {
  dbInit();
  
  // await Product.sync({ alter: true });

  await Phone.sync({ alter: true });

  await seedInitialData();
}

// seedInitialData();

sync();
