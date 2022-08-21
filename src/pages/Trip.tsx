import React from 'react'

const Trip = () => {
  return (
    <>
    <div className="trip-container bg-white h-full flex justify-center items-center">
        <div className="hero-section bg-slate-200 w-9/12  h-4/6 rounded-2xl shadow-xl p-4" >
            <div className="flex flex-column justify-center">
                <h1 className="text-slate-600 text-2xl w-2/4 text-center">Enter your filters and we will give you informations about the location</h1>
            </div>
            <div className="filters">
            <div className="destination mt-4" >
                <h3 className="ml-44 text-slate-500">Choose your destination :</h3>
                <div className="form-control flex flex-row gap-4 mt-2 justify-center content-center">
                    <label className="input-group input-group-vertical w-1/3">
                        <span className="bg-slate-400 text-white">From</span>
                        <select className="select select-bordered bg-white">
                            <option disabled selected>Pick category</option>
                            <option>Tunisia</option>
                            <option>France</option>
                        </select>
                    </label>
                    <label className="input-group input-group-vertical w-1/3">
                        <span className="bg-slate-400 text-white">To</span>
                        <select className="select select-bordered bg-white">
                            <option disabled selected>Pick category</option>
                            <option>France</option>
                            <option>Tunisia</option>
                        </select>
                    </label>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trip