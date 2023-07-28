import React, { ChangeEvent, useState } from "react";
import "./Ratings.scss";
import drop from "../../assets/angle-right 1.png";
import { Rating } from "react-simple-star-rating";
interface SidebarProps {
  handelRatingfunc: (value: number) => void;
}
const Ratings: React.FC<SidebarProps> = ({ handelRatingfunc }) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
//this component just display the ratings and send click response 
  const handleCheckboxChange = (value: number) => {
    handelRatingfunc(value);
  };
  return (
    <div className="ratings">
      <div
        className="ratings-container"
        onClick={(prev) => setDropDownMenu(!dropDownMenu)}
      >
        <h2 className="dropdown-btn">Ratings</h2>
        <img src={drop} alt="" width={20} height={20} />
      </div>
      {dropDownMenu && (
        <div className="dropdown-content">
          <div onClick={() => handleCheckboxChange(1)}>
            <label>
              <input type="checkbox" id="Ratings1" />

              <Rating initialValue={1} className="rate" readonly />
            </label>
          </div>
          <div onClick={() => handleCheckboxChange(2)}>
            <label>
              <input type="checkbox" id="Ratings1" />

              <Rating initialValue={2} className="rate" readonly />
            </label>
          </div>
          <div onClick={() => handleCheckboxChange(3)}>
            <label>
              <input type="checkbox" id="Ratings1" />

              <Rating initialValue={3} className="rate" readonly />
            </label>
          </div>
          <div onClick={() => handleCheckboxChange(4)}>
            <label>
              <input type="checkbox" id="Ratings1" />

              <Rating initialValue={4} className="rate" readonly />
            </label>
          </div>
          <div onClick={() => handleCheckboxChange(5)}>
            <label>
              <input type="checkbox" id="Ratings1" />

              <Rating initialValue={5} className="rate" readonly />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
export default Ratings;
