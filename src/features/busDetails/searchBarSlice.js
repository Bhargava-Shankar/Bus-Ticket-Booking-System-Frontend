import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: "totalPrice",
    initialState: {
        value: {
            from: "",
            to : ""
        }
    },
    reducers: {
        setFrom: (state, action) => {
            state.value.from = action.payload
        },
        setTo: (state, action) => {
            state.value.to = action.payload
        },
        swapLocation: (state, action) => {
            state.value.from = action.payload['to'];
            state.value.to = action.payload['from'];
        }
    }
})

export const { setFrom,setTo,swapLocation } = searchBarSlice.actions
export default searchBarSlice.reducer