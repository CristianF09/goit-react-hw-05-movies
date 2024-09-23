const API_KEY = '55aa6ae40b9f98b84693daf1163a8814';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return response.ok ? response.json() : Promise.reject('Failed to fetch trending movies');
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
  return response.ok ? response.json() : Promise.reject('Failed to search movies');
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return response.ok ? response.json() : Promise.reject('Failed to fetch movie details');
};

export const fetchMovieCredits = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.ok ? response.json() : Promise.reject('Failed to fetch movie credits');
};

export const fetchMovieReviews = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.ok ? response.json() : Promise.reject('Failed to fetch movie reviews');
};