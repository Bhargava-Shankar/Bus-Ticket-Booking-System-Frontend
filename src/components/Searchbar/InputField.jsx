import React from 'react'
import landmarkRed from "../../assets/img/landmark-black.svg"
import landmarkBlack from "../../assets/img/landmark-red.svg"
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFrom,setTo } from '../../features/busDetails/searchBarSlice'
import { useEffect } from 'react'

const InputField = ({ name }) => {
  
  let locationValue;

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const inputContainerRef = useRef(null);
  const [focus, setFocus] = useState("");
  const handleFocus = (e) => {
    if (inputRef.current.contains(e.target)) {
      inputRef.current.focus();
    }
    else {
      inputRef.current.blur();
    }
  }

  useEffect(() => {
    console.log(locationValue);
  },[locationValue])
  const handleInput = (e) => {
    if (name === "From") {
      dispatch(setFrom(e.target.value));
    }
    else if(name === "To") {
      dispatch(setTo(e.target.value));
    }
  }

  
  return (
    <div className={`flex flex-row  w-[15rem] h-full overflow-clip items-center ${focus} `}
      ref = {inputContainerRef}
      onClick={(e) => handleFocus(e)}>
      <div className='min-h-8 min-w-8 max-w-8 max-h-8 ml-2 mr-2'>
        <img src={landmarkBlack} className=' object-contain' alt="" />
      </div>
      <div className='flex flex-col'>
        <div className='font-semibold text-sm text-gray-400'>{name}</div>
        <div className='w-max'>
          <input type="text" name="source" className={` cursor-pointer text-xl font-bold outline-none ${focus} `} ref={inputRef} onChange={(e) => handleInput(e)}  />
        </div>
      </div>
    </div>
  )
}

export default InputField
