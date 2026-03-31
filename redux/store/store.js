import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../reducers/movieSlice";
import favouritesReducer from "../reducers/favouritesSlice";

export const store = configureStore({
  reducer: {
    movieState: moviesReducer,
    favouritesState: favouritesReducer,
  },
});