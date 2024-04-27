import React, {useState, useEffect} from 'react';
import styles from './styles/SearchBar.css';

function SearchBar(props) {
    const [keyword, setKeyword] = useState('');

    const search = (e) => {
        e.preventDefault();
        props.onSearch(keyword);
    };

    return (
        <div>
            <form id="searchBar" name="searchBar" className='searchBar'>
                <label htmlFor='search' className='helperText'>Search for music via keyword</label>
                <input 
                    type='text' 
                    id='search' 
                    placeholder='Song, title, artist, genre, etc...' 
                    className='searchBox' 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                />
                <button type='button' className='searchButton' onClick={search}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;