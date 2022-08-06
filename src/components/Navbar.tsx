import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar  drop-shadow-sm flex justify-between ">
        <div className="flex-2">
            <a className="btn btn-ghost normal-case text-3xl text-slate-700">Airb&t</a>
        </div>
        <div className="flex-note gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered bg-white" />
            </div>
        </div>
    </div>
  )
}

export default Navbar