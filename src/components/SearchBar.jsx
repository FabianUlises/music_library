import React, { useState } from 'react';

const SearchBar = (props) => {
  // State
  let [searchTerm, setSearchTerm] = useState('');
  return (
    <form>
      <input type="text" placeHolder='Enter a search term here' />
      <button type='button'>Submit</button>
    </form>
  )
};
export default SearchBar;