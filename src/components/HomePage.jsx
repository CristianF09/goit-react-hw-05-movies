import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from './api.js'; 
import MovieList from './MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        const data = await fetchTrendingMovies(); 
        setMovies(data.results); 
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMoviesData(); 
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;