import React, { useState } from 'react';
import { API_URL } from '../api';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000/product/search?query=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Failed to fetch search results', err);
      setError('Failed to fetch search results');
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>

        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="search-results">
        {results.length > 0 ? (
          <ul className="results-list">
            {results.map((item) => (
              <li key={item._id} className="result-item">
                <h4>{item.ProductName}</h4>
                <img src={`${API_URL}/uploads/${item.image}`} alt={item.ProductName} className="result-image" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
