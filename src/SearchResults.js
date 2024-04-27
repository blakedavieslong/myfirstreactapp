import React from 'react';
import Tracklist from './Tracklist';
import styles from './styles/SearchResults.css';

function SearchResults(props) {
    return (
        <div className='container'>
            <h2>Results</h2>
            <Tracklist
                tracks={props.searchResults}
                onSelect={props.onSelect} 
                addRemove='+' 
            />
        </div>
    );
};

export default SearchResults;