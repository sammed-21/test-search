import React from 'react'
import "./ProductCard.scss"
interface Items{
    id: number;
    image: string;
  name: string;
  price: string;
}
const TrendSuggestion:React.FC<Items> =({id,image,name ,price})=> {
  return (
      <div className="cards">
          <img src={image} alt="image" width={150} height={200} className='fashion_image'/>
      <p>{name}</p>
      
      
    </div>
  )
}

export default TrendSuggestion