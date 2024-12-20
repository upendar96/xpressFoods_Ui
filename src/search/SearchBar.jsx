import React, { useState } from 'react';
import { API_URL } from '../api';
import {Link} from 'react-router-dom'

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState({
    products:[],
    firms:[]

  });

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
          placeholder="Search for Resturant,cuisine or a dish"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>

        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="search-results">
       
          <ul className="results-list">
            {results.products.map((item) => (
              <li key={item._id} className="result-item">
                <h4>{item.ProductName}</h4>
                <img src={`${API_URL}/uploads/${item.image}`} alt={item.ProductName} className="result-image" />
              </li>
            ))}
          </ul>
          
          <ul className="results-list">
            {results.firms.map((item) => (
              <li key={item._id} className="result-item">
                 <Link to={`/products/${item._id}/${item.firmName}`} className="firm-link">
                <h4>{item.firmName}</h4>
                <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} className="result-image" /></Link>
              </li>
            ))}
          </ul>
        
      </div>
    </div>
  );
};

export default SearchBar;
