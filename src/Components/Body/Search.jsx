import { useContext, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MovieContext } from '../../Providers/MovieProvider';

const Search = () => {
    const { search, setSearch } = useContext(MovieContext);
    const searchRef = useRef(search);
    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Search movies here . . .'
                ref={searchRef}
            />
            <FaSearch
                className='search-icon'
                onClick={() => setSearch(searchRef.current.value)}
            />
        </div>
    );
};

export default Search;
