import React from 'react';
import Track from './Track';

function Tracklist(props) {
    alert(typeof JSON.stringify(props.tracks));

          /*  return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));*/


            /* {props.tracks.map((track) => {
                return (
                    <Track 
                        title={track.name}
                        artist={track.artist}
                        album={track.album}
                    />
                );
            })}  */
    return (
        <div> 
            
        </div>
    );
};

export default Tracklist;
