import { createSlice } from "@reduxjs/toolkit";

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
export const seatTrackerSlice = createSlice({
    name: "seatTracker",
    initialState: {
        value: seatsList
    },
    reducers: {
        selectSeat: (state,action) => {
            const { key, seatNumber, booked } = action.payload
            //console.log(action.payload)
            let newSeat = action.payload;
            newSeat.booked = !newSeat.booked
            console.log(newSeat)
            state.value = [
                ...state.value.slice(0, key),
                newSeat,
                ...state.value.slice(key-1)
            ]
        }
    }
})

export const { selectSeat } = seatTrackerSlice.actions

export default seatTrackerSlice.reducer