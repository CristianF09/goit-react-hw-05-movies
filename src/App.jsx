import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

const HomePage = React.lazy(() => import('./components/HomePage'));
const MoviesPage = React.lazy(() => import('./components/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./components/MovieDetailsPage'));

const App = () => {
  return (
    <div className={styles['app-container']}>
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <p>&copy; 2024 Movie Search App</p>
      </footer>
    </div>
  );
};

export default App;