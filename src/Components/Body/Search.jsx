import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className='search'>
            <FaSearch /> <input type='text' placeholder='Search movies' />
        </div>
    );
};

export default Search;
