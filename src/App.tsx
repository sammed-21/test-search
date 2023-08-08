import React, { useState } from 'react';
 
import './App.scss';
// import Logo from "./assets/logo.png"
import SearchBar from './SearchBar/SearchBar';
import FilterResult from './FilterResult/FilterResult';
 
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setIsSearchPerformed(true);
  };
  const homePage = () => {
    setIsSearchPerformed(false)
  
  }
  return (

    <div className="App">
       {/* <div className="App"> */}
      <div className="container">
        <div className={isSearchPerformed ? 'hidden' : 'search'}>

        <SearchBar onSearchSubmit={handleSearchSubmit} />
        </div>
        <div className={isSearchPerformed ? 'search' : 'hidden'}>

        {isSearchPerformed && <FilterResult searchQuery={searchQuery} />}
        </div>
      </div>
      {/* <img src={Logo} onClick={()=>homePage()} className="logo" /> */}
      <h2 onClick={()=>homePage()} className="logo">SearchBoard</h2>
    </div>
  );
}

export default App;
