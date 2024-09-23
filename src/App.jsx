import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MovieDetailsPage from './MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;