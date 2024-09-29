import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies, fetchTrendingMovies } from './api.js'; 
import MovieList from './MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data;
        if (query) {
          data = await searchMovies(query); 
        } else {
          data = await fetchTrendingMovies(); 
        }

        
        if (!data || !Array.isArray(data.results)) {
          throw new Error('Invalid data structure');
        }
        
        setMovies(data.results); 
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies. Please try again later.'); 
        setMovies([]); 
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value;
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <h1>{query ? 'Search Results' : 'Trending Movies'}</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      
      {error ? ( 
        <p>{error}</p>
      ) : (
        movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No movies found.</p>
        )
      )}
    </div>
  );
};

export default MoviesPage;