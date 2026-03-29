import { createStore, combineReducers } from "redux";
import movieFetchReducer from "../reducers/movieFetchReducer";

const rootReducer = combineReducers({
    movieState: movieFetchReducer,
});

export const store = createStore(rootReducer);