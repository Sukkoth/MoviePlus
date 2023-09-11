import { createContext, useState } from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const MovieContext = createContext({});

const MovieProvider = ({ children }) => {
    const navigate = useNavigate();
    const [selection, setSelection] = useState('topBoxOffice');
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
    const [favourites, setFavourites] = useState(
        JSON.parse(localStorage.getItem('moviePlus')) || []
    );
    const [search, setSearch] = useState('');
    function handleSelectionChange(selectionTobeSet) {
        setSearch(null);
        setSelection(selectionTobeSet);
        setPage(1);
        if (location.pathname !== '/') {
            navigate('/');
        }
    }

    function handleGenreChange(genreTobeSet) {
        genre !== genreTobeSet ? setGenre(genreTobeSet) : setGenre(null);
        setPage(1);
    }

    function handleFavouriteAction(movie) {
        const found = favourites.find((mov) => mov?.id === movie?.id);

        if (found?.id) {
            setFavourites((prev) =>
                prev.filter((mov) => mov?.id !== movie?.id)
            );

            return localStorage.setItem(
                'moviePlus',
                JSON.stringify(
                    [...favourites].filter((mov) => mov?.id !== movie?.id)
                )
            );
        }
        setFavourites((prev) => [...prev, movie]);
        localStorage.setItem(
            'moviePlus',
            JSON.stringify([...favourites, movie])
        );
    }

    const { movies, error, isLoading } = useFetchMovies(
        selection,
        genre,
        page,
        search
    );

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
                favourites,
                handleFavouriteAction,
                search,
                setSearch,
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
