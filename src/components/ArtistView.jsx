import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

function ArtistView() {
    // Params
    const { id } = useParams();
    const navigate = useNavigate();
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
            {renderAlbums}
        </div>
    )
};
export default ArtistView;