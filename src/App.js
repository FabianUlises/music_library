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
  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
      <SearchBar />
      <Gallery />
    </div>
  );
};
export default App;