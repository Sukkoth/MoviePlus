import { createContext, useState } from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const MovieContext = createContext({});

const MovieProvider = ({ children }) => {
    const navigate = useNavigate();
    const [selection, setSelection] = useState('popular');
    const [genre, setGenre] = useState('');
    const [genres] = useState([
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'Film-Noir',
        'Game-Show',
        'History',
        'Horror',
        'Music',
        'Musical',
        'Mystery',
        'News',
        'Reality-TV',
        'Romance',
        'Sci-Fi',
        'Short',
        'Sport',
        'Talk-Show',
        'Thriller',
        'War',
        'Western',
    ]);
    const [page, setPage] = useState(1);

    function handleSelectionChange(selectionTobeSet) {
        setSelection((prev) => selectionTobeSet);
        setPage(1);
        if (location.pathname !== '/') {
            navigate('/');
        }
    }

    function handleGenreChange(genreTobeSet) {
        genre !== genreTobeSet ? setGenre(genreTobeSet) : setGenre(null);
        setPage(1);
    }

    const { movies, error, isLoading } = useFetchMovies(selection, genre, page);

    return (
        <MovieContext.Provider
            value={{
                isLoading,
                error,
                movies,
                selection,
                handleSelectionChange,
                genres,
                selectedGenre: genre,
                handleGenreChange,
                page,
                setPage,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

MovieProvider.propTypes = {
    children: PropTypes.object,
};

export default MovieProvider;
