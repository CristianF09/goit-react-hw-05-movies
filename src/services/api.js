import fetch from 'node-fetch';

const API_KEY = '55aa6ae40b9f98b84693daf1163a8814';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await fetch(url);
  return response.json();
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

export const getMovieCredits = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

export const getMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};