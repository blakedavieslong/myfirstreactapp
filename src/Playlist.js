import React from 'react';
import Tracklist from './Tracklist';
import styles from './styles/Playlist.css';

function Playlist(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSave();
    }

    return (
        <div className='container'>
            <form name='playlist' id='playlist' onSubmit={handleSubmit}>
                <input 
                    name='playlistName' 
                    id='playlistName' 
                    type="text" 
                    value={props.playlistName} 
                    onChange={(e) => props.setPlaylistName(e.target.value)} 
                    placeholder='Enter playlist name...' 
                    className='pName' />
                <button className='savePlaylistButton'>Save Playlist</button>
            </form>
            <Tracklist tracks={props.playlistTracks} onSelect={props.onSelect} addRemove='-' />
        </div>
    );
}

export default Playlist;