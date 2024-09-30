import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchHistoryContext } from './SearchHistoryContext'; 

const Navbar = () => {
  const { addSearchTerm, searchHistory } = useContext(SearchHistoryContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      addSearchTerm(searchQuery);
     
    }
    setSearchQuery('');
  };

  return (
    <nav>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchHistory.map((term, index) => (
          <li key={index}>
            <Link to={`/search?query=${term}`}>{term}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;