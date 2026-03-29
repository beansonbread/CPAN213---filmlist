import { FETCH_MOVIES_FAIL, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "../actionTypes/movieFetch";

const initialState = {
    movies: [],
    loading: false,
    error: null,
}

export default function movieFetchReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIES_START:
            return{...state, loading: true, error:null};
        case FETCH_MOVIES_SUCCESS:
            return{...state, loading: false, movies:action.payload}
        case FETCH_MOVIES_FAIL:
            return{...state, loading: false, error: action.payload}
        default:
            return state;
    }
}