import React from 'react';
import styles from './styles/SearchPanel.css';

function SearchPanel() {
    return (
        <div>
            <form className='searchPanel'>
                <label htmlFor='search' className='helperText'>Search with a keyword</label>
                <input type='text' id='search' placeholder='Song, title, artist, genre, etc...' className='searchBox' />
                <button className='searchButton'>Search</button>
            </form>
        </div>
    );
}

export default SearchPanel;