import { configureStore } from '@reduxjs/toolkit'
import seatTrackerReducer from "./features/busDetails/seatTrackerSlice";
import totalPriceReducer from "./features/busDetails/seatTrackerSlice";
import searchBarReducer from "./features/busDetails/searchBarSlice";

export default configureStore({
  reducer: {
    seatTracker: seatTrackerReducer,
    searchBar : searchBarReducer,
  },
})