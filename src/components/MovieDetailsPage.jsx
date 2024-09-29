import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from './api.js'; 

const MovieDetailsPage = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId); 
        setMovie(data); 
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>No movie details found.</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt={movie.title} />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}/10</p>
      {}
    </div>
  );
};

export default MovieDetailsPage;