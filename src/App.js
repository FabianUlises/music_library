import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView';

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
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SearchBar handleSearch={handleSearch} />
              <Gallery data={data} />
            </Fragment>
          } />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;