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
        <input type="checkbox" id="Price1" />

        <label htmlFor="Price1">H&M</label>
      </li>
      <li>
        <input type="checkbox" id="Price2" />
        <label htmlFor="Price2">Mango</label>
      </li>

    </ul>


</div>
}
  </div>
  )
}
export default Brand