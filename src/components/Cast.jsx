import React from 'react';

const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;