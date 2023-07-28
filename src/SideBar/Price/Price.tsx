import React, { useState } from 'react'
import "./Price.scss"
import drop from '../../assets/angle-right 1.png'
const Price = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (<div className="Price">

 
    <div className="Price-container" onClick={prev => setDropDownMenu(!dropDownMenu)}>

      <h1 className="dropdown-btn">Price</h1>
      <img src={drop} alt="" width={20} height={20}/>
    </div>
    {dropDownMenu && 
    <div className="dropdown-content">
     
       
        <ul>
          <li>
            <input type="checkbox" id="Price1" />
            <label htmlFor="Price1">under 500</label>
          </li>
          <li>
            <input type="checkbox" id="Price2" />
            <label htmlFor="Price2">500 to 3000</label>
          </li>

        </ul>
   

    </div>
}
  </div>
  )
}
export default Price