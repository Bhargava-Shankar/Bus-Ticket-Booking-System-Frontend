import React from 'react'
import seatAvailable from "../../assets/svg/seat-available.svg"
import seatBooked from "../../assets/svg/seat-booked.svg"


const Seat = ({ booked,seatNumber }) => {
    return (
        booked ? 
        <span className='cursor-pointer'>
               <img src={seatBooked} className='h-10 bg-gray-500' alt="" />
        </span> :
        <span className="cursor-pointer">
              <img src={seatAvailable} className='h-10' alt="" />
        </span>
    )
}

const seats = [
    { seatNumber: "LL1", booked: false },
    { seatNumber: "LL2", booked: true },
    { seatNumber: "LL3", booked: true },
    { seatNumber: "LL4", booked: false },
    { seatNumber: "LL5", booked: false },
    { seatNumber: "LL6", booked: false },
    { seatNumber: "LL7", booked: false },
     { seatNumber: "LL8", booked: false },
    { seatNumber: "LR1", booked: false },
    { seatNumber: "LR2", booked: true },
    { seatNumber: "LR3", booked: false },
    { seatNumber: "LR4", booked: false },
    { seatNumber: "LR5", booked: false },
     { seatNumber: "LR6", booked: false },
    { seatNumber: "LR7", booked: false },
    { seatNumber: "LR8", booked: false },
    // { seatNumber: "UL1", booked: false },
    // { seatNumber: "UL2", booked: false },
    // { seatNumber: "UL3", booked: true },
    // { seatNumber: "UL4", booked: false },
    // { seatNumber: "UL5", booked: false },
    // { seatNumber: "UR1", booked: true },
    // { seatNumber: "UR2", booked: true },
    // { seatNumber: "UR3", booked: false },
    // { seatNumber: "UR4", booked: false },
    // { seatNumber: "UR5", booked: false }
]

const SeatLayout = () => {
  return (
      <div className='flex flex-col justify-center items-center bg-gray-100 w-full h-[20rem]'>
          <div className='flex flex-row gap-2 flex-wrap items-center w-[24rem]'>
              {
              seats.map((value, key) => {
                  return (
                      <Seat key = {key}
                          booked = {value.booked}
                          className={
                              `${((key + 1) % 8 === 0) ? 'basis-full' : ''}`}
                          seatNumber = {value.seatNumber}
                      ></Seat>
                  )
              })
        }
          </div>
          
    </div>
  )
}

export default SeatLayout
