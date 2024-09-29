import React, { useEffect, useState } from 'react';
import { fetchMovies } from './api'; 
import MovieItem from './MovieItem'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true); 
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData.results || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    getMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div>
      {Array.isArray(movies) && movies.length > 0 ? (
        movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} /> 
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;