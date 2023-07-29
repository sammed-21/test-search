import React, { ChangeEvent } from "react";
import "./SideBar.scss";
import Brand from "./Brand/Brand";
import Price from "./Price/Price";
import Ratings from "./Rating/Ratings";
interface SidebarProps {
  handleChange: (value: string) => void;
  
  handlePriceFilter: (value: string) => void;
  handelRatingfunc: (value: number) => void;

}
const sideBar: React.FC<SidebarProps> = ({ handleChange,handlePriceFilter,handelRatingfunc }) => {
  

   

  return (
    <div className="container-sidebar">
      <div className="header">
        <h1>Search Results</h1>
      </div>
      <div className="container-side">
        <Brand handleChange={handleChange} />
        <Price handlePriceFilter={handlePriceFilter} />
        <Ratings handelRatingfunc={handelRatingfunc} />
      </div>
    </div>
  );
};
export default sideBar;
