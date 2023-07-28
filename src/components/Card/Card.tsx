import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import image from "../../assets/home.jpg";
import Heart from "react-animated-heart";
import "./Card.scss"
interface Props {
  property1: "variant-2" | "default";
  id: number;
  overlapGroupClassName: any;

  text: string;
  text1: string;
  text2: string;

  img: string;
}
// {
//   property1,
//  id,
//   overlapGroupClassName,

//   text = "Round neck cotton Tee",
//   text1 = "Rs. 599",
//   text2 = "Rs.549",

//   img = "star-2-2.svg",

// }: Props
const Card = () => {
  const [rating, setRating] = useState(0);
  const [isClick, setClick] = useState(false); // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
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
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />{" "}
        </div>
      </div>
      <div className="round-neck-cotton"><h3>The salsa bae</h3>
      <div className="group">
        <div className="rs">Rs. 345</div>
        <div className="text-wrapper">Rs.549</div>
      </div>
      <div className="div">
        <div className="group-2">
          <Rating onClick={handleRating} initialValue={rating} />
        </div>
        <div className="element">(210)</div>
      </div>
      </div>
    </div>
  );
};

export default Card;
