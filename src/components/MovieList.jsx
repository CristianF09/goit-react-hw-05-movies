import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.example.com/movies?api_key=${process.env.REACT_APP_API_KEY55aa6ae40b9f98b84693daf1163a8814}`); // Replace with the actual API endpoint
        const data = await response.json();
        console.log(data);
        setMovies(data.results || []); // Ensure results is an array
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

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