import { Sequelize } from "sequelize-typescript";
import { models } from "../models";
import dotenv from "dotenv"

dotenv.config();
const URI = process.env.URI || '';

export const dbInit = () => {
  try {
    const db = new Sequelize(
      URI,
      {
        models,
        dialectOptions: {
          ssl: true,
        }
      }
    );

    console.log('DB successfully initialized');

    return db;
  } catch (error) {
    console.log('DB failed to connect', error);
  }
}
