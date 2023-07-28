import React, { useEffect, useState } from "react";
import "./TrendSugestions.scss";
 
import ProductCard from "../components/ProductCard/ProductCard";
import { generateData } from '../utils/generateClothingData';
 
  interface ClothingItem {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
  }
function TrendSuggestions() {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
 
    useEffect(() => {
      const data  = generateData(5);
      setClothingItems(data);
      
 
    }, []);

  return (
    <div className="main">
      <div>

        <h2>Latest Trends</h2>
        <div className="container">

          {clothingItems.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard id={item.id} image={item.image} name={item.name} price={item.price}/>
              </div>
            );
          })}
        </div>

      </div>
      <div className="second-container">
        <h2>Popular Suggestions</h2>

        {clothingItems.map((items) => {
          return (
            <div key={items.id}>
              <p>{items.name}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default TrendSuggestions;
function generateClothingData() {
  throw new Error("Function not implemented.");
}

