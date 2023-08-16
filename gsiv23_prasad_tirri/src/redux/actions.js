import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const FETCH_MOVIE_DETAILS = "FETCH_MOVIE_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a46a46dadeb9aae1cf0012d9a4b248e3";

export const fetchMovies =
  (page = 1) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
      );
      dispatch({ type: FETCH_MOVIES, payload: response.data.results });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    dispatch({ type: SEARCH_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
