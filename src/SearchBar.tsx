// SearchBar.tsx

import React, { useState } from "react";
import "./styles/components/SearchBar/SearchBar.scss"; // Import the SCSS file
import TrendSuggestions from "./TrendSugestions";
import Search from "./assets/Group.png"
const SearchBar: React.FC = () => {
  const [showTrendSuggestions, setShowTrendSuggestions] = useState(false);

  const handleInputFocus = () => {
    setShowTrendSuggestions(true);
  };

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
        />
        <img
          src={Search}
          alt="search image"
          width="20"
          height="20"
        />
      </div>
      <div className="second-container">

      {showTrendSuggestions && <TrendSuggestions />}
      </div>
    </div>
  );
};

export default SearchBar;
