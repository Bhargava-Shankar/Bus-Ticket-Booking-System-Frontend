import { createSlice } from "@reduxjs/toolkit";


const seatsList = [
    { "seatNumber": "LL1", "booked": false, "price": 800 },
    { "seatNumber": "LL2", "booked": false, "price": 800 },
    { "seatNumber": "LL3", "booked": false, "price": 800 },
    { "seatNumber": "LL4", "booked": false, "price": 800 },
    { "seatNumber": "LL5", "booked": false, "price": 800 },
    { "seatNumber": "LL6", "booked": false, "price": 1000 },
    { "seatNumber": "LL7", "booked": false, "price": 1000 },
    { "seatNumber": "LL8", "booked": false, "price": 1000 },
    { "seatNumber": "LR1", "booked": false, "price": 800 },
    { "seatNumber": "LR2", "booked": false, "price": 800 },
    { "seatNumber": "LR3", "booked": false, "price": 800 },
    { "seatNumber": "LR4", "booked": false, "price": 800 },
    { "seatNumber": "LR5", "booked": false, "price": 800 },
    { "seatNumber": "LR6", "booked": false, "price": 1000 },
    { "seatNumber": "LR7", "booked": false, "price": 1000 },
    { "seatNumber": "LR8", "booked": false, "price": 1000 }
]

function seatPrice(seata, seatb) {
    console.log(seata)
    return seata['price'] + seatb['price']
}

export const seatTrackerSlice = createSlice({
    name: "seatTracker",
    initialState: {
        value: {
            seatsList: seatsList,
            totalPrice: 0   
        }
    },
    reducers: {
        selectSeat: (state,action) => {
            const { key, seatNumber, booked } = action.payload
            let newSeat = action.payload;
            console.log(newSeat);
            newSeat.booked = !newSeat.booked
            state.value.seatsList = [
                ...state.value.seatsList.slice(0, key-1),
                newSeat,
                ...state.value.seatsList.slice(key)
            ]
            if (newSeat.booked) {
                state.value.totalPrice += newSeat.price;
            }
            else {
                state.value.totalPrice -= newSeat.price;
            }
        }
    }
})

export const { selectSeat } = seatTrackerSlice.actions

export default seatTrackerSlice.reducer