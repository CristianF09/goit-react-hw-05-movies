import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovieDetails } from './api.js'; 
import styles from './MovieDetailsPage.module.css';  

const MovieDetailsPage = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  

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
    <div className={styles.container}>
      
      <button onClick={() => navigate(-1)} className={styles.goBackButton}>
        Go back
      </button>

      <div className={styles.movieDetails}>

        {movie.poster_path ? (
          <img 
            src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} 
            alt={movie.title} 
            className={styles.poster}
          />
        ) : (
          <p>No poster available.</p>
        )}

        <div className={styles.info}>
          <h1>{movie.title}</h1>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <h2>Additional Information</h2>
        <div className={styles.buttons}>
          
          <Link to="cast">
            <button className={styles.castButton}>Cast</button>
          </Link>
          <Link to="reviews" style={{ marginLeft: '10px' }}>
            <button className={styles.reviewsButton}>Reviews</button>
          </Link>
          
          <button 
            onClick={() => navigate(-1)} 
            className={styles.goBackButton}
            style={{ marginLeft: '10px' }}
          >
            Go back
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;