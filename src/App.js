import { useEffect, useState } from 'react';
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search For Music!');
  let [data, setData] = useState([]);
  const API_URL = "https://itunes.apple.com/search?term=";
  // Function to update search
  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term)
  };
  useEffect(() => {
    if(search) {
      const fetchData = async () => {
        document.title = `${search} Music`;
        const res = await fetch(`${API_URL}${search}`);
        const data = await res.json();
        if(data.results.length > 0) {
          setData(data.results);
        } else {
          setMessage('Not Found');
        }
      }
      fetchData();
    }
  }, [search])
  return (
    <div className="App">
      <header>
        <p>{message}</p>
      </header>
      <SearchBar handleSearch={handleSearch} />
      <Gallery data={data} />
    </div>
  );
};
export default App;