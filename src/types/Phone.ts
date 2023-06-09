export enum Colors {
  black = "black",
  gold = "gold",
  silver = "silver",
  red = "red",
  coral = "coral",
  yellow = "yellow",
  green = "green",
  midnightgreen = "midnightgreen",
  spacegray = "spacegray",
  white = "white",
  purple = "purple",
  rosegold = "rosegold",
}

export interface Phone {
  id: string,
  category: string,
  phoneId: string,
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