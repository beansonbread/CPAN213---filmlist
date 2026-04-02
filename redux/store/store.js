import { createStore, combineReducers } from "redux";
import movieFetchReducer from "../reducers/movieFetchReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  movieState: movieFetchReducer,
  favouritesState: favouritesReducer,
});

export const store = createStore(rootReducer);