import React from 'react';

const SearchBox = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Procure por nome ou número..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-box"
    />
  );
};

export default SearchBox;
