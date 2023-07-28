import React, { useState } from 'react'
import "./Ratings.scss"
import drop from '../../assets/angle-right 1.png'
import { Rating } from 'react-simple-star-rating'
const Ratings = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [rating, setRating] = useState(1)
  return (<div className="ratings">

 
    <div className="ratings-container" onClick={prev => setDropDownMenu(!dropDownMenu)}>

      <h1 className="dropdown-btn">Ratings</h1>
      <img src={drop} alt="" width={20} height={20}/>
    </div>
    {dropDownMenu && 
    <div className="dropdown-content">
     
       
        <ul>
          <li>
            <input type="checkbox" id="Ratings1" />

            <Rating   initialValue={1} className='rate' readonly />
          </li>
          <li>
            <input type="checkbox" id="Ratings2" />
            <Rating   initialValue={2} className='rate' readonly/>
          </li>
          <li>
            <input type="checkbox" id="Ratings2" />
            <Rating   initialValue={3} className='rate' readonly/>
          </li>
          <li>
            <input type="checkbox" id="Ratings2" />
            <Rating   initialValue={4} className='rate' readonly/>
          </li>
          <li>
            <input type="checkbox" id="Ratings2" />
            <Rating   initialValue={5} className='rate' readonly/>
          </li>

        </ul>
   

    </div>
}
  </div>
  )
}
export default Ratings