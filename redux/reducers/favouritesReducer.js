import {
  SET_FAVOURITES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../actionTypes/favouriteActionTypes";

const initialState = {
  favourites: [],
};

export default function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };

    case ADD_FAVOURITE: {
      const exists = state.favourites.some((item) => item.id === action.payload.id);
      if (exists) {
        return state;
      }

      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    }

    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}