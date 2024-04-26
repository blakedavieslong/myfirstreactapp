import React, { useState } from 'react';
import Tracklist from './Tracklist';
import styles from './styles/Playlist.css';

function Playlist() {
    const [name, setName] = useState('');

    return (
        <div className='container'>
            <form name='playlist' id='playlist'>
                <input 
                    name='playlistName' 
                    id='playlistName' 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Enter playlist name...' 
                    className='pName' />
            </form>
            <Tracklist />
        </div>
    );
}

export default Playlist;