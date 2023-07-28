import React, { useState } from 'react'
import "./Brand.scss"
import drop from '../../assets/angle-right 1.png'
const Brand = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (<div className="brand">

 
    <div className="brand-container" onClick={prev => setDropDownMenu(!dropDownMenu)}>

      <h1 className="dropdown-btn">Brand</h1>
      <img src={drop} alt="" width={20} height={20}/>
    </div>
    {dropDownMenu && 
    <div className="dropdown-content">
     
       
        <ul>
          <li>
            <input type="checkbox" id="brand1" />
            <label htmlFor="brand1">Brand 1</label>
          </li>
          <li>
            <input type="checkbox" id="brand2" />
            <label htmlFor="brand2">Brand 2</label>
          </li>

        </ul>
   

    </div>
}
  </div>
  )
}
export default Brand