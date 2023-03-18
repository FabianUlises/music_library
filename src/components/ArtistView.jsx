import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

function ArtistView() {
    const { id } = useParams();
    // State
    const [ artistData, setArtistData ] = useState([])
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`;
        const fetchData = async() => {
            const res = await fetch(API_URL);
            const data = await res.json();
            setArtistData(data.results)
        }
        fetchData();
    }, [id]);
    // Albums filtered from state variable
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album');
    // Function to display albums
    const renderAlbums = justAlbums.map((album, i) => {
        return(
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })
    return (
        <div>
            {renderAlbums}
        </div>
    )
};
export default ArtistView;