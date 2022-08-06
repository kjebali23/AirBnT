import React from 'react'
import CarouselCard from './CarouselCard'

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-full p-4 mb-4  space-x-4 bg-slate-100 rounded-box">
        <div className="carousel-item">
          <CarouselCard/>
        </div>
        <div className="carousel-item">
          <CarouselCard/>
        </div>
        <div className="carousel-item">
          <CarouselCard/>
        </div>
        <div className="carousel-item">
          <CarouselCard/>
        </div>
        <div className="carousel-item">
          <CarouselCard/>
        </div>
        
    </div>
  )
}

export default Carousel