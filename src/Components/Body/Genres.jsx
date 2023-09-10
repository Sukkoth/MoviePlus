import { useContext } from 'react';
import { MovieContext } from '../../Providers/MovieProvider';
import './genres.styles.css';

const Genres = () => {
    const { genres, selectedGenre, handleGenreChange } =
        useContext(MovieContext);

    return (
        <div>
            <ul className='genres'>
                {genres.map((genre, index) => (
                    <li
                        className={
                            genre === selectedGenre ? 'genre active' : 'genre'
                        }
                        key={index}
                        onClick={() => handleGenreChange(genre)}
                    >
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Genres;
