import React, {useState, useEffect} from 'react';
import styles from './styles/SearchBar.css';

function SearchBar(props) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const search = () => {
        props.onSearch(keyword);
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
                <button className='searchButton' onClick={search}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;