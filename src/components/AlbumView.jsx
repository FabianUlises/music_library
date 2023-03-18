import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function AlbumView() {
    // Params
    const {id} = useParams();
    const navigate = useNavigate();
    // State
    const [ albumData, setAlbumData ] = useState([])
    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`;
        const fetchData = async() => {
            const res = await fetch(API_URL);
            const data = await res.json();
            setAlbumData(data.results);
        }
        fetchData();
    }, [id]);
    // Filter for songs
    const justSongs = albumData.filter(item => item.wrapperType === 'track');
    console.log(justSongs)
    // Functoin to display songs
    const renderSongs = justSongs.map((song, i) => {
        return(
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    });
    // Navigation buttons
    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    };
    return (
        <div>
            {navButtons()}
            {renderSongs}
        </div>
    )
};
export default AlbumView;