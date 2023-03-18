import { useEffect, useState, useRef } from 'react';
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
// Context
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
  // State
  let [message, setMessage] = useState('Search For Music!');
  let [data, setData] = useState([]);
  let searchInput = useRef('');
  const API_URL = "https://itunes.apple.com/search?term=";
  // Function to handle search and fetch data
  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} Music`;
      const res = await fetch(`${API_URL}${term}`);
      const data = await res.json();
      if(data.results.length > 0) {
        return setData(data.results);
      } else {
        return setMessage('Not Found');
      }
    }
    fetchData();
  };
  return (
    <div className="App">
      <header>
        <p>{message}</p>
      </header>
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar/>
      </SearchContext.Provider>
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
};
export default App;