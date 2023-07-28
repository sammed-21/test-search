import { faker } from "@faker-js/faker";
import { useState } from "react";


export interface ClothingItem {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
  }
  
  // Function to generate fake clothing items
export const generateData = (count: number) => {
   
    const data: ClothingItem[] = Array(count).fill(null).map((_, index) => ({
      id: index,
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: "cloths" }),
    }));
    return data;
}

