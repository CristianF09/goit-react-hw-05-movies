import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';  
import { getMovieDetails } from './api.js'; 

const MovieDetailsPage = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate

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

      {movie.poster_path ? (
        <img 
          src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} 
          alt={movie.title} 
        />
      ) : (
        <p>No poster available.</p>
      )}

      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}/10</p>

      {/* Navigation Section */}
      <nav style={{ marginTop: '20px' }}>
        <Link to="cast">
          <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
            Cast
          </button>
        </Link>
        <Link to="reviews">
          <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
            Reviews
          </button>
        </Link>
      </nav>

      {/* Go Back Button Section */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate(-1)} style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
          Go Back
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;