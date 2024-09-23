const API_KEY = '55aa6ae40b9f98b84693daf1163a8814';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/day?language=en-US`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Accept': 'application/json',
      },
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Accept': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Accept': 'application/json',
      },
    });
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Accept': 'application/json',
      },
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};