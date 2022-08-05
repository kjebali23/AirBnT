import React from 'react'

const Card = () => {
  return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure>
                <img src="https://placeimg.com/400/225/arch"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Test</h2>
                <p>if a dog chews shoes whose shoes does he choose?</p>
                <div className="card-action justify-end">
                    <button className="btn btn-primary">See more</button>
                </div>
            </div>
        </div>
  )
}

export default Card