import React, { useContext } from 'react';
// Context
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
  // Context
  const {term, handleSearch} = useContext(SearchContext);
  return (
    <form>
      <input ref={term} type="text" placeholder='Enter a search term here' />
      <button onClick={(e) => handleSearch(e, term.current.value)} type='submit'>Submit</button>
    </form>
  )
};
export default SearchBar;