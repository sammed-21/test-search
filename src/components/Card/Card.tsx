import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
 import Heart from "react-animated-heart";
import "./Card.scss";
interface Props {
  id: number;
  name: string;
  category: string;
  price: string;
  largePrice: string;
  image: string;
  clampedRating:number
}

const Card = ({ id, name, category, price, largePrice, image ,clampedRating}: Props) => {
  const [isclick, setClick] = useState(false); // Catch Rating value
 console.log(clampedRating)
   return (
    <div className="frame">
      <div className={`overlap-group`}>
        <span>
          <img
            src={image}
            alt="image"
            width={250}
            height={270}
            className="fashion_image"
          />
          <div className="view-product-button">
            <span>View Product</span>
          </div>
        </span>
        <div className="heart">
          <Heart isClick={isclick} onClick={() => setClick(!isclick)} />{" "}
        </div>
      </div>
      <div className="round-neck-cotton">
        <h3>{name}</h3>
        <div className="group">
          <div className="rs">{largePrice}</div>
          <div className="text-wrapper">{price}</div>
        </div>
        <div className="div">
          <div className="group-2">
            <Rating initialValue={clampedRating}  className="custom-rating" />{" "}
          </div>
          <div className="element">(210)</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
