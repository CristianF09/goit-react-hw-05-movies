const API_KEY = '55aa6ae40b9f98b84693daf1163a8814';
const BASE_URL = 'https://api.themoviedb.org/3';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const fetchMovies = async (page = 1) => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const fetchTrendingMovies = async (page = 1) => {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const searchMovies = async (query, page = 1) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const getMovieCredits = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const getMovieReviews = async (movieId, page = 1) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=${page}`;
  const response = await fetch(url);
  return handleResponse(response);
};