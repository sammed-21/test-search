import React, { ChangeEvent, useState } from "react";
import "./Price.scss";
import drop from "../../assets/angle-right 1.png";
interface SidebarProps {
 
  handlePriceFilter:(value:string) => void;
}
const Price: React.FC<SidebarProps> = ({ handlePriceFilter }) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handlePriceFilter(value);
  };
  return (
    <div className="price">
      <div
        className="price-container"
        onClick={(prev) => setDropDownMenu(!dropDownMenu)}
      >
        <h2 className="dropdown-btn">Price</h2>
        <img src={drop} alt="" width={20} height={20} />
      </div>
      {dropDownMenu && (
        <div className="dropdown-content">
          <ul>
            <li>
              <input
                type="checkbox"
                id="Price1"
                value="under500"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Price1">
                <p>under 500</p>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Price2"
                value="500to3000"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Price2">
                <p>500 to 3000</p>
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Price;
