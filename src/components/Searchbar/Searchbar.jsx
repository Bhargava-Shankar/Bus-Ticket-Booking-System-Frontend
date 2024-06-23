import React from 'react'
import search from "../../assets/img/search.svg"
import InputField from './InputField'
import CalendarField from './CalendarField'

const Searchbar = () => {
  return (
    <div className=
      "flex flex-row h-[5rem] rounded-lg bg-white \
      \  cursor-pointer  overflow-clip    \
      \justify-between items-center"
    >
      <InputField></InputField>
      <div className='w-[0.1px] h-full bg-black'></div>
      <InputField></InputField>
      <div className='w-[0.1px] h-full bg-black'></div>
      <CalendarField></CalendarField>
      <div className='w-[0.1px] h-full bg-black'></div>
      <div className='flex flex-row  bg-red-700 w-[10rem] h-full text-white text-xl font-bold justify-center items-center pb-2'>
            Search
      </div>
    </div>
  )
}

export default Searchbar
