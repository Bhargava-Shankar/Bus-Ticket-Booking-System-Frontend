import React, { useState } from 'react'
import search from "../../assets/img/search.svg"
import InputField from './InputField'
import CalendarField from './CalendarField'
import swapIcon from "../../assets/svg/swap.svg"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { swapLocation } from '../../features/busDetails/searchBarSlice'

const Searchbar = () => {

  const from = useSelector((state) =>
    state.searchBar.value.from);
   const to = useSelector((state) =>
    state.searchBar.value.to);
  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(from)
    console.log(to)
  },[from,to])

  const handleSwap = () => {
    dispatch(swapLocation({ from: from, to: to }))
  }

  return (
    <div className=
      "flex flex-row h-[5rem] rounded-lg bg-white \
      \  cursor-pointer z-10  \
      \justify-between items-center"
    >
      <InputField name={"From"}></InputField>
      <div className='h-full flex flex-row items-center'>
        <div className='w-[0.1px] h-full bg-black'></div>
        <div className='relative -left-4 bg-gray-200 rounded-lg h-min p-1' onClick={handleSwap}>
          <img src={swapIcon} className='h-6'  />
        </div>
        
      </div>
      <InputField name={"To"}></InputField>
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
