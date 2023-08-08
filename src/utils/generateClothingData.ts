import { faker } from "@faker-js/faker";
import { useState } from "react";


export interface ClothingItem {
  id: number;
  name: string;
  category: string;
price: string;
largePrice: string; 
image: string;
clampedRating:number
  }
  
  // Function to generate fake clothing items
export const generateData = (count: number , search?:any) => {
  const basePrice = Math.floor(Math.random() * 900) + 100; 
    const data: ClothingItem[] = Array(count).fill(null).map((_, index) => ({
      id: index,
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: 'cloths' ||`${search}`}),
      largePrice: `Rs. ${basePrice + 100}`,
      clampedRating : Math.floor(Math.random() * 6)
  }));
 
    return data;
}

