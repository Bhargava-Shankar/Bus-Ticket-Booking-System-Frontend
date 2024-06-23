import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
      <div className='flex flex-row gap-2 w-full justify-center'>
          <div className="flex flex-row justify-between items-center bg-white 
          w-[50rem] h-12  m-7 rounded-full p-5 pb-6">
              <div className='text-2xl font-bold  text-red-600'>
                  BookMyBus
              </div>
              <ul className='flex flex-row gap-3 font-semibold'>
                  <li>
                      <Link to="/signup/">Signup</Link>
                  </li>
                  <li>
                      <Link to="/login/">Login</Link>
                  </li>
                  <li>
                       <Link to="/docs/">Docs</Link>
                  </li>
              </ul>
          </div>
    </div>
  )
}

export default NavBar
