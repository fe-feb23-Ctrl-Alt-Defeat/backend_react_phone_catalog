import { Colors } from "../enums/Color";

type Description = {
  title: string;
  text: string[];
}

export interface Phone {
  id: string;
  namespaceId: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: Colors[];
  color: Colors;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}