import { useState, useEffect } from 'react';
import tmdb from '../../api/tmdb';
import PropTypes from 'prop-types';

const SearchBar = ({ onResponse }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const searchMovies = async () => {
            if(query !== ''){
                let response = await tmdb.getMoviesSearchByName(query);
                onResponse(response.results);
            }else{
                onResponse([]);
            }
        }
    

        const delayDebounceFn = setTimeout(() => {
            searchMovies();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return (
        <input 
            type='text'
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='search-bar'
        />
    )
}

SearchBar.propTypes = {
    onResponse: PropTypes.func.isRequired,
}

export default SearchBar