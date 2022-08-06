import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center bg-slate-100 p-4 rounded-lg">
        <Card cityName="Bangkok" description="if a dog chews shoes whose shoes does he choose?" id={0}/>
        <Card cityName="Paris" description="if a dog chews shoes whose shoes does he choose?" id={1}/>
        <Card cityName="London" description="if a dog chews shoes whose shoes does he choose?" id={2}/>
        
    </div>
  )
}

export default CardSection