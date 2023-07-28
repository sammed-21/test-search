import React, { ChangeEvent } from "react";
import "./SideBar.scss";
import Brand from "./Brand/Brand";
import Price from "./Price/Price";
import Ratings from "./Rating/Ratings";
interface SidebarProps {
  handleChange: (value: string) => void;
  
  handlePriceFilter:(value:string) => void;
}
const sideBar: React.FC<SidebarProps> = ({ handleChange,handlePriceFilter }) => {
  return (
    <div className="container-sidebar">
      <div className="header">
        <h1>Search Results</h1>
      </div>
      <div className="container-main">
        <Brand handleChange={handleChange} />
        <Price handlePriceFilter={handlePriceFilter} />
        <Ratings handleChange={handleChange} />
      </div>
    </div>
  );
};
export default sideBar;
