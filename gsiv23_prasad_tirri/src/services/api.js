import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a46a46dadeb9aae1cf0012d9a4b248e3";

export const getMovies = () => {
  return axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}`);
};

export const searchMovies = (query) => {
  return axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
};
export const getMovie = (id) => {
  return axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
};
