import React from 'react';
import styles from './styles/Track.css';

function Track(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSelect(props.track, props.addRemove);
    };

   /* alert(JSON.stringify(props.track));*/

    return (
        <div className='trackSlot'>
            <h3 className='songTitle'>{props.track.name}</h3>
            <p className='songInfo'>{props.track.artist} | {props.track.album}</p>
            <form onSubmit={handleSubmit} >
                <button className='add'>{props.addRemove}</button>
            </form>
        </div>
    );
}

export default Track;