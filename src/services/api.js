import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "2ae22097d31211671987ec9823871d47";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWUyMjA5N2QzMTIxMTY3MTk4N2VjOTgyMzg3MWQ0NyIsInN1YiI6IjY2MjExN2MzMDIzMWYyMDE3YzExY2Q1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TueSlk3mXCd34Bix1uba8oes31u1jewhqkVObG5KW9Y";

console.log(API_KEY, TOKEN);

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios("/trending/movie/day?language=en-US", options);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios(`/movie/${id}?language=en-US`, options);
  return response.data;
};

export const getMovieCast = async (id) => {
  const response = await axios(`/movie/${id}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async (id) => {
  const response = await axios(`/movie/${id}/reviews`, options);
  return response.data.results;
};

export const getMoviesByNam = async (query) => {
  const response = await axios("/search/movie", {
    params: {
      query: query,
    },
    ...options,
  });
  return response.data.results;
};
