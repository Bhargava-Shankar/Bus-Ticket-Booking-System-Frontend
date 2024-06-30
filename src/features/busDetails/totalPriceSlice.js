import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState: {
        value: 0
    },
    reducers: {
        updateTotalPrice: (state, action) => {
            state.value = action.payload  
            console.log(store.getState())
        }
    }
})

export const { updateTotalPrice } = totalPriceSlice.actions



export default totalPriceSlice.reducer