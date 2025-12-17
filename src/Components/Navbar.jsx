import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-16 flex gap-4 items-center bg-gray-900 text-white/60 p-2'>
        <NavLink to={'/'}> Home </NavLink>
        <NavLink to={'/about'}> About </NavLink>
        <NavLink to={'/contact'}> Contact </NavLink>
    </div>
  )
}

export default Navbar