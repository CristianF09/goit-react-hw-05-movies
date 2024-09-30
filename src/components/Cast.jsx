import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from './api'; 
import styles from './Cast.module.css';


const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

const noImage = 'path/to/default/image.jpg'; 

const Cast = () => {
  const { movieId } = useParams(); 
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCredits(movieId); 
        setCast(castData.cast || []); 
      } catch (err) {
        setError('Failed to fetch cast information.');
        console.error('Failed to fetch cast details:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  if (cast.length === 0) {
    return <p className={styles.noCastInfo}>No cast information available.</p>; 
  }

  return (
    <ul className={styles.castList}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.castItem}>
          <img
            src={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : noImage}
            alt={actor.name}
            className={styles.castImage}
          />
          <p><strong>{actor.name}</strong></p>
          <p>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;