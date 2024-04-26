import React from 'react';
import Tracklist from './Tracklist';
import styles from './styles/SearchResults.css';

function SearchResults() {
    return (
        <div className='container'>
            <h2>Results</h2>
            <Tracklist />
        </div>
    );
};

export default SearchResults;