import { Phone } from "../models/Phone";

export const getById = (id: string) => {
  return Phone.findByPk(id);
};