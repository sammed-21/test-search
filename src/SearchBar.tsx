// SearchBar.tsx

import React, { useState } from 'react';
import './styles/components/SearchBar/SearchBar.scss'; // Import the SCSS file
import  TrendSuggestions  from './TrendSugestions';

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
    <input
      type="text"
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
        placeholder="Search"
        className='inputtag'
    />
    {showTrendSuggestions && <TrendSuggestions />}
  </div>
  );
};

export default SearchBar;
