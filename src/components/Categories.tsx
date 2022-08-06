import React from 'react'
import Carousel from './Carousel'
import Divider from './Divider'

const Categories = () => {
  return (
        <div className=" grid flex-column justify-items-center 	">
            <Divider />
        {/* <h2  className="text-2xl text-slate-700 text-center mt-4 text-center">Categories</h2> */}
        <Carousel/>
        </div>
  )
}

export default Categories