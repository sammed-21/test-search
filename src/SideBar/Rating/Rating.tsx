import React, { useState } from 'react'
import "./Rating.scss"
import drop from '../../assets/angle-right 1.png'
import start from "../../assets/Group 24.svg"
import start2 from "../../assets/Group 25.svg"
import start3 from "../../assets/Group 26.svg"
import start4 from "../../assets/Group 27.svg"
import start5 from "../../assets/Group 28.svg"
const Rating = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (<div className="Rating">

 
    <div className="Rating-container" onClick={prev => setDropDownMenu(!dropDownMenu)}>

      <h1 className="dropdown-btn">Rating</h1>
      <img src={drop} alt="" width={20} height={20}/>
    </div>
    {dropDownMenu && 
    <div className="dropdown-content">
     
       
        <ul>
          <li>
            <input type="checkbox" id="Rating1" />
             <img src={start} alt="rate"/>
          </li>
          <li>
            <input type="checkbox" id="Rating1" />
             <img src={start2} alt="rate"/>
          </li>
          <li>
            <input type="checkbox" id="Rating1" />
            <img src={start3} alt="rate"/>
          </li>
         
          <li>
            <input type="checkbox" id="Rating1" />
             <img src={start4} alt="rate"/>
          </li>
          <li>
            <input type="checkbox" id="Rating1" />
             <img src={start5} alt="rate"/>
          </li>
          

        </ul>
   

    </div>
}
  </div>
  )
}
export default Rating