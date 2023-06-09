import { Phone, Colors } from '../types/Phone';


let phones: Phone[] = [
  {
    id: '1',
    category: "phones",
    phoneId: "apple-iphone-7-32gb-black",
    itemId: "apple-iphone-7-32gb-black",
    name: "Apple iPhone 7 32GB Black",
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: "32GB",
    color: Colors.black,
    ram: "2GB",
    year: 2016,
    image: "img/phones/apple-iphone-7/black/00.jpg"
  },
  {
    id: '2',
    category: "phones",
    phoneId: "apple-iphone-7-plus-32gb-black",
    itemId: "apple-iphone-7-plus-32gb-black",
    name: "Apple iPhone 7 Plus 32GB Black",
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: "32GB",
    color: Colors.black,
    ram: "3GB",
    year: 2016,
    image: "img/phones/apple-iphone-7-plus/black/00.jpg"
  },
  {
    id: '3',
    category: "phones",
    phoneId: "apple-iphone-8-64gb-gold",
    itemId: "apple-iphone-8-64gb-gold",
    name: "Apple iPhone 8 64GB Gold",
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: "64GB",
    color: Colors.gold,
    ram: "2GB",
    year: 2017,
    image: "img/phones/apple-iphone-8/gold/00.jpg"
  },
];

export const getFilteredPhones = ({
  phoneId,
  itemId,
  name,
  fullPrice,
  price,
  capacity,
  color,
  ram,
  year,
}: Phone) => {
  let filteredPhones = phones;

  switch (true) {
    case !!phoneId:
      return filteredPhones = filteredPhones.filter(phone => phone.phoneId === phoneId);

    case !!itemId:
      return filteredPhones = filteredPhones.filter(phone => phone.itemId === itemId);

    case !!name:
      return filteredPhones = filteredPhones.filter(phone => phone.name.toLowerCase().includes(name.toLowerCase()));

    case !!fullPrice:
      return filteredPhones = filteredPhones.filter(phone => phone.fullPrice === fullPrice);

    case !!price:
      return filteredPhones = filteredPhones.filter(phone => phone.price === price);

    case !!capacity:
      return filteredPhones = filteredPhones.filter(phone => phone.capacity === capacity);

    case !!color:
      return filteredPhones = filteredPhones.filter(phone => phone.color === color);

    case !!ram:
      return filteredPhones = filteredPhones.filter(phone => phone.ram === ram);

    case !!year:
      return filteredPhones = filteredPhones.filter(phone => phone.year === year);

    default:
      return filteredPhones
  }
}

export const getPhoneById = (id: string) => {
  return phones.find(phone => phone.id === id) || null;
}

