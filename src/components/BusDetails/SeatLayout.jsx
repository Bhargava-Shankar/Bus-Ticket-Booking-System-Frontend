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
    { seatNumber: "LL1", booked: false },
    { seatNumber: "LL2", booked: false },
    { seatNumber: "LL3", booked: false },
    { seatNumber: "LL4", booked: false },
    { seatNumber: "LL5", booked: false },
    { seatNumber: "LL6", booked: false },
    { seatNumber: "LL7", booked: false },
    { seatNumber: "LL8", booked: false },
    { seatNumber: "LR1", booked: false },
    { seatNumber: "LR2", booked: false },
    { seatNumber: "LR3", booked: false },
    { seatNumber: "LR4", booked: false },
    { seatNumber: "LR5", booked: false },
    { seatNumber: "LR6", booked: false },
    { seatNumber: "LR7", booked: false },
    { seatNumber: "LR8", booked: false }
]
const SeatLayout = () => {

    const [seats, setSeats] = useState(seatsList)

    const count = useSelector((state) => state.seatTracker.value)
    const dispatch = useDispatch()

    const handleSelectSeat = (e, seatNumber, key) => {   
        let filteredSeats = seats.filter((seat) => seat.seatNumber != seatNumber)
        console.log(key)
        let newList = [
            ...seats.slice(0, key ),
            { seatNumber: seatNumber, booked: true },
            ...seats.slice(key + 1)
        ]
        setSeats(newList)
    }
    useEffect(() => {

    },[seats])
    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 w-full h-[10rem]'>
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
          
    </div>
  )
}

export default SeatLayout
