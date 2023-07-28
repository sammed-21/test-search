//
// import React, { ChangeEvent, useState } from 'react'
// import "./Brand.scss"
// import drop from '../../assets/angle-right 1.png'

// interface SidebarProps{
//   handleChange: (value: string) => void;}
// const Brand: React.FC<SidebarProps> = ({ handleChange }) => {
//   console.log(handleChange);
  
//   const [dropDownMenu, setDropDownMenu] = useState(false);
//   return (<div className="brand">

 
//     <div className="brand-container" onClick={prev => setDropDownMenu(!dropDownMenu)}>

//       <h1 className="dropdown-btn">Brand</h1>
//       <img src={drop} alt="" width={20} height={20}/>
//     </div>
//     {dropDownMenu &&
//     <div className="dropdown-content">
     
       
//     <ul>
//       <li>
//         <input onChange={e => handleChange} value="H&M" title="H&M" name="H&M" type="checkbox" id="Price1" />

//         <label htmlFor="Price1">H&M</label>
//       </li>
//       <li>
//         <input type="checkbox" id="Price2" />
//         <label htmlFor="Price2">Mango</label>
//       </li>

//     </ul>


// </div>
// }
//   </div>
//   )
// }
// export default Brand

import React, { ChangeEvent, useState } from 'react';
import "./Brand.scss";
import drop from '../../assets/angle-right 1.png';

interface SidebarProps {
  handleChange: (value: string) => void;
}

const Brand: React.FC<SidebarProps> = ({ handleChange }) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  // const handleCheckboxChange = (brandName: string) => {
  //   handleChange(brandName);
  // };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const brandName = event.target.value;
      handleChange(brandName);
    }
  }
  return (
    <div className="brand">
      <div className="brand-container" onClick={() => setDropDownMenu(!dropDownMenu)}>
        <h1 className="dropdown-btn">Brand</h1>
        <img src={drop} alt="" width={20} height={20} />
      </div>
      {dropDownMenu && 
        <div className="dropdown-content">
          <ul>
            <li>
              <input
               onChange={ handleCheckboxChange}
                value="H&M"
                title="H&M"
                name="H&M"
                type="checkbox"
                id="Price1"
              />
              <label htmlFor="Price1">H&M</label>
            </li>
            <li>
              <input
               onChange={  handleCheckboxChange }
                value="Mango"
                title="Mango"
                name="Mango"
                type="checkbox"
                id="Price2"
              />
              <label htmlFor="Price2">Mango</label>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};

export default Brand;
