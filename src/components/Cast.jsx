import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from './api'; // Adjust the path as necessary
import styles from './Cast.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';
const noImage = 'path/to/default/image.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Failed to fetch cast details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.length > 0 ? (
        cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <img
              src={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : noImage}
              alt={actor.name}
            />
            <p><strong>{actor.name}</strong></p>
            <p>as {actor.character}</p>
          </li>
        ))
      ) : (
        <p className={styles.noCastInfo}>No cast information available.</p>
      )}
    </ul>
  );
};

export default Cast;