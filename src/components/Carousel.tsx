import React from 'react'
import CarouselCard from './CarouselCard'

const Carousel = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      <h3 className="text-3xl text-slate-700 mt-8 mb-4 ml-12">Categories :</h3>
    <div className="grid content-center justify-items-center ">
      <div className="carousel carousel-center max-w-full  p-4 mb-7 flex-row justify-items-center space-x-4 bg-slate-100 rounded-box">
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
        
    </div>
    </div>
  )
}

export default Carousel