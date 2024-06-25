import React from 'react'
import Searchbar from './Searchbar/Searchbar'
import BusDetails  from './BusDetails/BusDetails'

const MainContent = () => {
  return (
      <div className=' h-[90%]'>
        <div className='flex flex-row justify-center'>
          <Searchbar></Searchbar>
      </div>
      <div className='flex w-full justify-center'>
          <BusDetails></BusDetails>
      </div>
    </div>
  )
}

export default MainContent
