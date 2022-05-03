import { useState, useRef } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext';
import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Fragment } from 'react';







function App(){
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term=';

    
    const handleSearch = (e, term) => {
        e.preventDef2ault();
        const fetchData = async () => {
            document.title = `${term} Music`
            const response = await fetch(API_URL + term)
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('No')
            }
        }
        fetchData()
    }

    return (
        <div className="App">
        {message}
        <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
            }}>
                <SearchBar />
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data} >
                <Gallery />
            </DataContext.Provider>

        </div>
    )
}
            {/* <Router>
                <Routes>
                    <Route path="/" element={
                        <Fragment>
                            <SearchBar handleSearch = {handleSearch}/>
                            <Gallery data={data} />
                        </Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router> */}

export default App