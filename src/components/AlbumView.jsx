import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function AlbumView() {
    const {id} = useParams();
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
    return (
        <div>
            {renderSongs}
        </div>
    )
};
export default AlbumView;