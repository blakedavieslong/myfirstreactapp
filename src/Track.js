import React from 'react';
import styles from './styles/Track.css';

function Track({title, artist, album}) {

    return (
        <div className='trackSlot'>
            <h3 className='songTitle'>{title}</h3>
            <p className='songInfo'>{artist} | {album}</p>
            <button className='add'>+</button>
        </div>
    );
}

export default Track;