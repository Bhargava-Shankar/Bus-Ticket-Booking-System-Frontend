import React from 'react'
import seatAvailable from "../../assets/svg/seat-available.svg"
import seatBooked from "../../assets/svg/seat-booked.svg"
import { useSelector, useDispatch } from 'react-redux'
import { selectSeat } from '../../features/busDetails/seatTrackerSlice'
import {
    useState, useEffect
} from 'react'


const Seat = ({ booked, seatNumber }) => {
    
    
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

const seatsList = [
    { seatNumber: "LL1", booked: false, price: 800 },
    { seatNumber: "LL2", booked: false, price: 800 },
    { seatNumber: "LL3", booked: false, price: 800 },
    { seatNumber: "LL4", booked: false, price: 800 },
    { seatNumber: "LL5", booked: false, price: 800 },
    { seatNumber: "LL6", booked: false, price: 800 },
    { seatNumber: "LL7", booked: false, price: 1000 },
    { seatNumber: "LL8", booked: false, price: 1000 },
    { seatNumber: "LR1", booked: false, price: 800 },
    { seatNumber: "LR2", booked: false, price: 800 },
    { seatNumber: "LR3", booked: false, price: 800 },
    { seatNumber: "LR4", booked: false, price: 800 },
    { seatNumber: "LR5", booked: false, price: 800 },
    { seatNumber: "LR6", booked: false, price: 800 },
    { seatNumber: "LR7", booked: false, price: 1000 },
    { seatNumber: "LR8", booked: false, price: 1000 }
]
const SeatLayout = () => {

    const seats = useSelector((state) => state.seatTracker.value.seatsList)
    const totalPrice = useSelector(state => state.seatTracker.value.totalPrice)

    const dispatch = useDispatch()

    return (
        <div className='flex flex-col justify-center items-center mt-3 w-full h-[10rem]'>
          <div className='flex flex-row gap-2 flex-wrap items-center w-[24rem]'>
              {
              seats.map((value, key) => {
                  return (
                      <div key={key}
                          onClick={() => dispatch(selectSeat({key:key+1,...value}))}
                          >
                          <Seat
                            booked={value.booked}
                            seatNumber={value.seatNumber}   
                        >      
                      </Seat>
                        </div>
                  )
              })
            }
            </div>
            <div className='text-2xl font-bold text-red-600 self-end m-2 top-0 relative'>
            ₹{totalPrice}
            </div>    
          
    </div>
  )
}

export default SeatLayout
