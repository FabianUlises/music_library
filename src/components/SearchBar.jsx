import React, { useState } from 'react';

const SearchBar = (props) => {
  // State
  let [searchTerm, setSearchTerm] = useState('');
  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
      <input type="text" placeholder='Enter a search term here' onChange={(e) => setSearchTerm(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  )
};
export default SearchBar;