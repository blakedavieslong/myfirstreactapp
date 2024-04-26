import React, {useState, useEffect} from 'react';
import styles from './styles/SearchBar.css';

function SearchBar() {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form id="searchBar" name="searchBar" className='searchBar' onSubmit={handleSubmit}>
                <label htmlFor='search' className='helperText'>Search for music via keyword</label>
                <input 
                    type='text' 
                    id='search' 
                    placeholder='Song, title, artist, genre, etc...' 
                    className='searchBox' 
                    value={keyword} onChange={(e) => setKeyword(e.target.value)} 
                />
                <button className='searchButton'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;