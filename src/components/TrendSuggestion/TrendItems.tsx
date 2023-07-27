import React from 'react'
import "./TendItems.scss"
interface Items{
    id: number;
    image: string;
    name:string;
}
const TrendSuggestion:React.FC<Items> =({id,image,name})=> {
  return (
      <div className="cards">
          <img src={image} alt="image" width={150} height={200} className='fashion_image'/>
          <p>{name}</p>
    </div>
  )
}

export default TrendSuggestion