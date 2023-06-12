import { Colors } from "../enums/Color";

export interface Product {
  id: string,
  category: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: Colors,
  ram: string,
  year: number,
  image: string
}