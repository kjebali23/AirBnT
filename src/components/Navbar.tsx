import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar  drop-shadow-sm flex justify-between  items-center">
        <div className="flex-2">
            <a className="btn btn-ghost normal-case text-3xl text-slate-700">Airb&t</a>
        </div>
            <div className="nav-links mr-16">
                <ul className="flex flex-row gap-6 font-medium text-lg">
                  <li> <p className="hover:underline underline-offset-2">Home</p></li>
                  <li><p className="hover:underline underline-offset-2">Plan a Trip</p></li>
                  <li><p className="hover:underline underline-offset-2">About us</p></li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar