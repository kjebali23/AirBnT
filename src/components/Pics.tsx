import React from 'react'
import {pickImages} from "../data/imgs"

const Pics = () => {
  return (
      <>
    <div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src={pickImages[0]} className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
</div>
<div className="w-64  carousel rounded-box">
  <div className="carousel-item w-full">
    <img src={pickImages[1]} className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
</div>
<div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src={pickImages[2]} className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
</div>
</>
  )
}

export default Pics