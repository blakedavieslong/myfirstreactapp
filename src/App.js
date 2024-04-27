import React, { useState } from 'react';
import './styles/App.css';
import TitleBar from './TitleBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from "./util/Spotify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const duplicateSongNotif = () => toast("Song already added to playlist");
  const playlistNameEmpty = () => toast("Enter playlist name to save a playlist");
  const playlistEmpty = () => toast("Add one or more songs to playlist to save");

  const search = (keyword) => {
    Spotify.search(keyword).then(setSearchResults); 
  };

  const onSelect = (track, addOrRemove) => {
    if (addOrRemove === '+'){
      if(playlist.some((currentTrack) => currentTrack.id === track.id)) {
        duplicateSongNotif();
        return;
      }
      setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
    } else {
      setPlaylist((prevPlaylist) => prevPlaylist.filter((currentTrack) => currentTrack.id !== track.id));
    }
  }

  const savePlaylist = () => {
    if(playlistName === '') {
      playlistNameEmpty();
      return;
    } 
    const trackUris = playlist.map((track) => track.uri);
    if(trackUris.length === 0) {
      playlistEmpty();
      return;
    }
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('');
      setPlaylist([]);
    });
  };

  return (
    <div className="App">
      <TitleBar />
      <SearchBar onSearch={search}/>
      <div className='body'>
        <SearchResults searchResults={searchResults} onSelect={onSelect}/>
        <Playlist 
          playlistTracks={playlist}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName} 
          onSelect={onSelect}
          onSave={savePlaylist}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
