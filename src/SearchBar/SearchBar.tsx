// SearchBar.tsx

import React, { useState } from "react";
import "./SearchBar.scss"; // Import the SCSS file
import TrendSuggestions from "../TrendSuggestions/TrendSugestions";
import Search from "../assets/Group.png";
import FilterResult from "../FilterResult/FilterResult";
interface SearchBarProp {
  onSearchSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProp> = ({ onSearchSubmit }) => {
  const [showTrendSuggestions, setShowTrendSuggestions] = useState(false);
   const [searchQuery, setSearchQuery] = useState<string>('');
   const handleInputFocus = () => {
    setShowTrendSuggestions(true);
  };
  const handleInputSearch = (e: any) => {
    setSearchQuery(e.target.value);
   };
  const handleInputBlur = () => {
    setShowTrendSuggestions(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    // you can perform any action you need with the searchQuery value here
     // reset the input field and hide the trend suggestions
     setShowTrendSuggestions(false);
     onSearchSubmit(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="search"
            onFocus={handleInputFocus}
            placeholder="Search"
            className="inputtag"
            onBlur={handleInputBlur}
            value={searchQuery}
            onChange={handleInputSearch}
          />
          <button type="submit">
            <img src={Search} alt="search image" width="20" height="20" />
          </button>
        </div>
      </form>
      <div className="second-container">
       

        {showTrendSuggestions && <TrendSuggestions />}
      </div>
    </div>
  );
};

 
export default SearchBar;
