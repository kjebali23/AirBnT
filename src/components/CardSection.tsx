import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center bg-slate-100 p-4 rounded-lg" style={{height:'25rem'}}>
        <Card/>
        <Card/>
        <Card/>
        
    </div>
  )
}

export default CardSection