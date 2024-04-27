import React from 'react';
import Track from './Track';

function Tracklist(props) {
    return (
        <div> 
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onSelect={props.onSelect}
                        addRemove={props.addRemove}
                    />
                );
            })}
        </div>
    );
};

export default Tracklist;
