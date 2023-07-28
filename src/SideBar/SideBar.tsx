import React from 'react'
import "./SideBar.scss"
import Brand from './Brand/Brand'
import Price from './Price/Price'
import Ratings from './Rating/Ratings'
const SideBar = () => {
  return (
      <div className="container-sidebar">
          <div className="header">
              <h1>Search Results</h1>
          </div>
          <div className="container-main">
              <Brand />
              <Price />
              <Ratings/>
          </div>
    </div>
  )
}

export default SideBar