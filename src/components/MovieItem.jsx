import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieItem.module.css'; 

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

const MovieItem = ({ movie }) => {
  return (
    <li className={styles.movieItem}>
      <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className={styles.moviePoster}
            style={{ width: '245px', height: '365px' }} 
          />
        ) : (
          <img
            src='path/to/default/image.jpg' 
            alt='No Poster Available'
            className={styles.moviePoster}
            style={{ width: '245px', height: '365px' }} 
          />
        )}
        <h2 className={styles.movieTitle}>{movie.title || 'No Title Available'}</h2>
      </Link>
    </li>
  );
};

export default MovieItem;