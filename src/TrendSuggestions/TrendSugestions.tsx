import React, { useEffect, useState } from "react";
import "./TrendSugestions.scss";
import { faker } from "@faker-js/faker";
 
import ProductCard from "../components/ProductCard/ProductCard";

interface ClothingItems{
  id: number;
  image: string;
  name: string;
}
const TrendSuggestions: React.FC = () => {
  const [clothingItems, setClothingItems] = useState<ClothingItems[]>([]);
  useEffect(() => {
    // Generate fake clothing data using Faker
    const generateClothingData = () => {
      const data: ClothingItems[] = Array(5).fill(null).map((_, index) => ({
        id: index,
        name: faker.commerce.productName(),
        category: faker.commerce.department(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'cloths' }),
      }));
      setClothingItems(data);
    };

    generateClothingData();
  }, []);

  return (
    <div className="main">
      <div>

      <h2>Latest Trends</h2>
      <div className="container">
        
        {clothingItems.map((item) => {
          return (
            <div key={item.id}>
              <ProductCard id={item.id} image={item.image} name={item.name} />
            </div>
          );
        })}
      </div>
      
      </div>
      <div className="second-container">
        <h2>Popular Suggestions</h2>

        {
          clothingItems.map((items) => {
            return (
              <div key={items.id}>
                <p>{items.name}</p>
              </div>
            )
          })
        }
      </div>
       
    </div>
  );
};

export default TrendSuggestions;
