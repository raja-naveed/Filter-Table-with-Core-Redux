import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="search-button"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="search-button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
