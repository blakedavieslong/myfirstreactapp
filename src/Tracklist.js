import React from 'react';
import Track from './Track';

function Tracklist() {
    return (
        <div>
            <Track title="testSong" artist="testArtist" album="testAlbum"/>
            <Track title="testSong2" artist="testArtist2" album="testAlbum2"/>
            <Track title="testSong3" artist="testArtist3" album="testAlbum3"/>
        </div>
    );
}

export default Tracklist;