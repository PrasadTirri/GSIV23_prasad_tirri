import { FETCH_MOVIES, SEARCH_MOVIES, SET_LOADING, SET_ERROR } from "./actions";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
