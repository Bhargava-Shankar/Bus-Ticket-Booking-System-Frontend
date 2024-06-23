import React, { useState } from 'react'
import Calendar from 'react-calendar';
import calendarImage from '../../assets/img/calendar.svg'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
const CalendarField = () => {
    var today = moment().format("DD/MM/YYYY");

    const [departureDate, setDepartureDate] = useState(today);
    const [showCal, setShowCal] = useState(false);

    const handleCalendar = (e) => {
        setShowCal(true)
    }

    const handleDate = (value, e) => {
        var newDate = moment(value.toDateString()).format("DD/MM/YYYY")
       setDepartureDate(newDate)
    }

    return (
      <div className='flex flex-col w-[15rem] h-full justify-start mt-6' onClick={(e) => handleCalendar(e)}>
            <div className="flex flex-row items-center h-full ml-2 gap-2 ">
                <div className='w-6'>
                    <img src={calendarImage} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-sm text-gray-400'>
                        Departure Date
                    </div>
                    <div className='text-xl font-bold'>
                              {departureDate}
                    </div>
              
                </div>         
            </div>
            <div className={`relative top-6 ${showCal ? "" : "invisible"}`}>
        
              <Calendar
                    className="rounded-xl text-sm font-semibold"
                    onChange={(value,event) => handleDate(value,event)}
              ></Calendar> 
        
            </div>
      </div>
      
  )
}

export default CalendarField
