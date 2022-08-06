import React from 'react'
import CarouselCard from './CarouselCard'

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-full p-4 mb-4  space-x-4 bg-slate-100 rounded-box">
        <div className="carousel-item">
          <CarouselCard name="Beach" id={1}/>
        </div>
        <div className="carousel-item">
          <CarouselCard name="Mountains" id={2}/>
        </div>
        <div className="carousel-item">
          <CarouselCard name="Camp" id={3}/>
        </div>
        <div className="carousel-item">
          <CarouselCard name="Urbain" id={4}/>
        </div>
        
    </div>
  )
}

export default Carousel