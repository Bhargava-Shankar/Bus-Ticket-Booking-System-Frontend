import React from 'react'
import landmarkRed from "../../assets/img/landmark-black.svg"
import landmarkBlack from "../../assets/img/landmark-red.svg"
import { useRef,useState } from 'react'

const InputField = ({name}) => {

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
          <input type="text" name="source" className={` cursor-pointer text-xl font-bold outline-none ${focus} `} ref={inputRef} />
        </div>
      </div>
     
    </div>
  )
}

export default InputField
