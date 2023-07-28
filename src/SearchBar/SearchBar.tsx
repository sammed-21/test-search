// SearchBar.tsx

import React, { useState } from "react";
import "./SearchBar.scss"; // Import the SCSS file
import TrendSuggestions from "../TrendSuggestions/TrendSugestions";
import Search from "../assets/Group.png"
const SearchBar: React.FC = () => {
  const [showTrendSuggestions, setShowTrendSuggestions] = useState(false);
const [searchQuery ,setSearchQuery]=useState('');
  const handleInputFocus = () => { 

    setShowTrendSuggestions(true);
  };
  const handleInputSearch = (e: any) => {
  
    setSearchQuery(e.target.value);
    console.log(searchQuery);
    
}
  const handleInputBlur = () => {
    setShowTrendSuggestions(false);
  };
  return (
    <div className="search-bar">
      <div className="search">
        <input
          type="search"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Search"
          className="inputtag"
          onChange={(e) => {
            handleInputSearch(e);
              // Call the handleInputSearch function with the updated search query
          }}
        />
        <img
          src={Search}
          alt="search image"
          width="20"
          height="20"
        />
      </div>
      <div className="second-container">

        {/* {showTrendSuggestions && <TrendSuggestions />} */}
        {showTrendSuggestions && <TrendSuggestions />}
        
      </div>
    </div>
  );
};

export default SearchBar;
