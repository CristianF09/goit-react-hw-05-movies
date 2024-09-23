import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, fetchMovieReviews } from '../services/api';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
    fetchMovieCredits(movieId).then(setCast);
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <h2>Cast</h2>
      <Cast cast={cast} />

      <h2>Reviews</h2>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default MovieDetailsPage;