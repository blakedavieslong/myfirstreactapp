import React, { useState } from 'react';
import './styles/App.css';
import TitleBar from './TitleBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from "./util/Spotify";


function App() {
  const [searchResults, setSearchResults] = useState('');

  const search = (term) => {
    Spotify.search(term).then(setSearchResults); 
  };

  return (
    <div className="App">
      <TitleBar />
      <SearchBar onSearch={search}/>
      <div className='body'>
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
