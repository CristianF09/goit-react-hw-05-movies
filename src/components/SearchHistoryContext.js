import React, { createContext, useState, useEffect, useCallback } from 'react';

export const SearchHistoryContext = createContext();

const MAX_HISTORY_SIZE = 10;

export const SearchHistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedSearch = localStorage.getItem('searchHistory');
    return savedSearch ? JSON.parse(savedSearch) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addSearchTerm = useCallback((term) => {
    term = term.toLowerCase().trim();
    setSearchHistory(prevHistory => {
      if (prevHistory.includes(term)) {
        const filteredHistory = prevHistory.filter(item => item !== term);
        return [term, ...filteredHistory];
      }
      const newHistory = [term, ...prevHistory];
      return newHistory.length > MAX_HISTORY_SIZE ? newHistory.slice(0, MAX_HISTORY_SIZE) : newHistory;
    });
  }, []);

  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  }, []);

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addSearchTerm, clearSearchHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};