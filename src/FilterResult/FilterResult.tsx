import React, { useEffect, useState } from "react";
import Search from "../assets/Group.png";
import "./FilterResult.scss"; // Import the SCSS file
import Card from "../components/Card/Card";
import { generateData } from "../utils/generateClothingData";

interface SearchResultPageProps {
  searchQuery: string;
}
 
interface ClothingItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}
const FilterResult: React.FC<SearchResultPageProps> = ({ searchQuery }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
 
    useEffect(() => {
      const data  = generateData(10);
      setClothingItems(data);
      
 
    }, []);
  const handleInputSearch = (e: any) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = () => {
    console.log("submited");
  };
  return (
    <div className="main">
      
       <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="search"
           
            placeholder="Search"
            className="inputtag"
         
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
          <h1>SideBar</h1>
        </div>
        <div className="container-main">
          {/* <h1>{searchQuery}</h1> */}
          <Card   />
        </div>
      </div>
    </div>
  );
};

export default FilterResult;
