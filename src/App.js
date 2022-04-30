import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView'
import { Router } from 'react-router-dom';

function App(){
    let [search, setSearch] = useState('new')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const API_URL = 'https://itunes.apple.com/search?term=';


    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                document.title = `${search} Music`
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    setData(resData.results)
                } else {
                    setMessage('No')
                }
            }
            fetchData()
        }
    }, [search])
    
    const handleSearch = (e, term) => {
        e.preventDefault();

        setSearch(term)
    }

    return (
        <div>
            {message}
            <Router>
                <SearchBar handleSearch={handleSearch} />
                <Gallery data={data} />
                <AlbumView />
                <ArtistView />
            </Router>
        </div>
    )
}

export default App


