import { FETCH_MOVIES_FAIL, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "../actionTypes/movieFetch";

export const fetchMoviesStart = () => ({ type: FETCH_MOVIES_START});
export const fetchMoviesSuccess = (movies) => ({ type: FETCH_MOVIES_SUCCESS, payload: movies});
export const fetchMoviesFail = (error) => ({
    type: FETCH_MOVIES_FAIL,
    payload: error,
})