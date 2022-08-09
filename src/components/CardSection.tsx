import React from 'react'
import Card from './Card'
import Divider from './Divider'

const CardSection = () => {
  return (
    <div className="bg-slate-50">
    
    
    <div className="flex flex-col flex-wrap ">
      <h3 className="text-3xl text-slate-700 mt-8 mb-4 ml-12">Most Popular destinations :</h3>
        <div className="cards flex flex-row gap-4 flex-wrap justify-center p-4">
        <Card cityName="Bangkok" description="if a dog chews shoes whose shoes does he choose?" id={0}/>
        <Card cityName="Paris" description="if a dog chews shoes whose shoes does he choose?" id={1}/>
        <Card cityName="London" description="if a dog chews shoes whose shoes does he choose?" id={2}/>
        </div>
    </div>
    </div>
  )
}

export default CardSection