import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/api'; // Ensure you're importing the correct function

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId) // Change fetchMovieCredits to getMovieCredits
      .then(data => setCast(data.cast))
      .catch(console.error);
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;