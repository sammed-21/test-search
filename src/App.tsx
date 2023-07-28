import React from 'react';
 
import './App.scss';
import Logo from "./assets/logo.png"
import SearchBar from './SearchBar/SearchBar';
 
function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
 
         <SearchBar/>
        
      </div>
      <img src={Logo} className="logo"/>
    </div>
  );
}

export default App;
