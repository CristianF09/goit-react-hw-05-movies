import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MovieList from './MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;