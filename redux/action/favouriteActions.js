import {
  SET_FAVOURITES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../actionTypes/favouriteActionTypes";

export const setFavourites = (movies) => ({
  type: SET_FAVOURITES,
  payload: movies,
});

export const addFavourite = (movie) => ({
  type: ADD_FAVOURITE,
  payload: movie,
});

export const removeFavourite = (movieId) => ({
  type: REMOVE_FAVOURITE,
  payload: movieId,
});