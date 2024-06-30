import moment from 'moment'
import React from 'react'
import SeatLayout from './SeatLayout'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const busDetails = [
    {
      busId: "66750c49f4e458f5dd0e3daf",
      busNumber: "BN1007",
      travelsName: "Economy Travels",
      source: "Chennai",
      destination: "Trichy",
      arrivalTime: "2024-06-22T04:00:00.000Z",
      departureTime: "2024-06-21T22:30:00.000Z",
      conditioningType: "AC",
      seatingType: "SEMI_SLEEPER",
      seatsAvailable: 14,
      totalSeats: 20
    },
    {
      busId: "66750c49f4e458f5dd0e3db0",
      busNumber: "BN1002",
      travelsName: "Happy Journeys",
      source: "Trichy",
      destination: "Chennai",
      arrivalTime: "2024-06-21T16:45:00.000Z",
      departureTime: "2024-06-21T10:15:00.000Z",
      conditioningType: "NON_AC",
      seatingType: "SEMI_SLEEPER",
      seatsAvailable: 18,
      totalSeats: 20
    }
  ]

const BusDetails = () => {


  const { busId, busNumber, travelsName, source, destination, arrivalTime, departureTime, conditioningType, seatingType, seatsAvailable, totalSeats } = busDetails[0]

  const [viewSeatLayout,setViewSeatLayout] = useState(true)

  let departureTimeFormatted = moment(departureTime).format("HH:MM")
  let arrivalTimeFormatted = moment(arrivalTime).format("HH:MM")

  
  const handleViewSeats = (e) => {
    setViewSeatLayout(!viewSeatLayout)
  }
  
  return (
    <div className='flex flex-col justify-between bg-white rounded-lg h-max w-[40rem] overflow-clip relative top-2'>
      <div className='w-full h-10 pt-2 pl-2' name="header">
        <span className='font-bold text-lg'>{travelsName}</span>
        <span className='ml-2 bg-yellow-500 h-min font-semibold py-1 px-1 rounded-md'>{ busNumber }</span>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full pb-5' name="content">
        <div className='flex flex-row justify-between w-full text-3xl font-semibold'>
          <div className='flex flex-row w-full justify-around'>
              <div className='flex flex-col items-center'>
              <div>
                    {departureTimeFormatted}
              </div>
              <div className='font-semibold text-[1rem]'>
                    {source}
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div>
                  {arrivalTimeFormatted}
              </div>
              <div className='font-semibold text-[1rem]'>
                {destination}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-around h-full w-40 grow-0'>
            <div className='text-sm font-thin'>
              <span className='font-bold'>{seatsAvailable}</span> Seats Available 
            </div>
            <div className='cursor-pointer bg-red-600 font-bold text-[1rem] w-min whitespace-nowrap text-white py-0 px-2 rounded mt-2'
              onClick = {(e) => handleViewSeats(e)}
            >
              View Seats
            </div>
          </div>
        </div>
        {
          viewSeatLayout ? <SeatLayout
          ></SeatLayout> : <div></div>
        }
        
      </div>
      
    </div>
  )
}

export default BusDetails
