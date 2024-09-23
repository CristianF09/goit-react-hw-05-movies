import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </li>
  );
};

export default MovieItem;