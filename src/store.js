import { configureStore } from '@reduxjs/toolkit'
import seatTrackerReducer from "./features/busDetails/seatTrackerSlice";
import totalPriceReducer from "./features/busDetails/seatTrackerSlice";

export default configureStore({
  reducer: {
    seatTracker: seatTrackerReducer,
  },
})