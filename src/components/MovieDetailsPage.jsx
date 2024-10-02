import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';  
import { getMovieDetails } from './api.js';
import styles from './MovieDetailsPage.module.css'; // Import styles

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To handle "Go back"

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
    <div className={styles.movieDetailsContainer}>
      {/* Go back button */}
      <button className={styles.goBackButton} onClick={() => navigate(-1)}>
        Go back
      </button>

      <div className={styles.movieContent}>
        {/* Movie Poster */}
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            className={styles.moviePoster}
          />
        ) : (
          <p>No poster available.</p>
        )}

        {/* Movie Info */}
        <div className={styles.movieInfo}>
          <h1>{movie.title}</h1>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className={styles.additionalInfo}>
        <h2>Additional Information</h2>
        <Link to="cast" className={styles.additionalButton}>
          <button>Cast</button>
        </Link>
        <Link to="reviews" className={styles.additionalButton}>
          <button>Reviews</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;