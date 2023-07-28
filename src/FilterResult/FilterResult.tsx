import React, { ChangeEvent, useEffect, useState } from "react";
import Search from "../assets/Group.png";
import "./FilterResult.scss"; // Import the SCSS file
import Card from "../components/Card/Card";
import { generateData } from "../utils/generateClothingData";
import SideBar from "../SideBar/SideBar";

interface SearchResultPageProps {
  searchQuery: string;
}

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  price: string;
  largePrice: string;
  image: string;
}
const FilterResult: React.FC<SearchResultPageProps> = ({ searchQuery }) => {
  const [selectItems, setSelectItems] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>(
    generateData(10)
  );

  useEffect(() => {
    // Filter the clothing items based on the searchInput
    const filteredItems = clothingItems.filter((item) =>
    Object.values(item).some((value) =>
    typeof value === 'string' && value.toLowerCase().includes(searchInput.toLowerCase())
  )
    );
    setClothingItems(filteredItems);
  }, [selectItems]);

  const handlePriceFilter = (priceRange: string) => {
    let filteredItems: ClothingItem[] = [];

    if (priceRange === "under500") {
      filteredItems = clothingItems.filter(item => parseFloat(item.price) < 500);
    } else if (priceRange === "500to3000") {
      filteredItems = clothingItems.filter(item => parseFloat(item.price) >= 500 && parseFloat(item.price) <= 3000);
    }

    setClothingItems(filteredItems);
  };
  const handleInputSearch = ( e:any ) => {
    setSearchInput(e.target.value);
    // setSearchInput("")
  };
  //radio filter 
  const handleChange = (value: string) => {
    setSelectItems(value);
    console.log(value);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = generateData(10);
    setClothingItems(data);
    setSearchInput("");
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            className="inputtag"
            value={searchInput}
            onChange={handleInputSearch}
          />
          <button type="submit">
            <img src={Search} alt="search image" width="20" height="20" />
          </button>
        </div>
      </form>
      {/* </div> */}
      <div className="container">
        <div className="sidebar">
        <SideBar handleChange={handleChange} handlePriceFilter={handlePriceFilter}  />
        </div>
        <div className="container-main">
          {/* <h1>{searchQuery}</h1> */}
          {clothingItems.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              largePrice={item.largePrice}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterResult;
