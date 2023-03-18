import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search For Music!');
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`;
      const res = await fetch("https://itunes.apple.com/search?term=the%20grateful%20dead");
      const data = await res.json();
      if(data.results.length > 0) {
        setData(data.results);
      } else {
        setMessage('Not Found');
      }
    }
    fetchData();
  }, [search])
  return (
    <div className="App">
      <header>
        <p>{message}</p>
      </header>
      <SearchBar />
      <Gallery />
    </div>
  );
};
export default App;