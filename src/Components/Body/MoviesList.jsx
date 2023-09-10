import { useContext } from 'react';
import CustomContentLoader from './ContentLoader';
import Movie from './Movie';
import './movies.styles.css';
import { MovieContext } from '../../Providers/MovieProvider';

const MoviesList = () => {
    const { movies, isLoading, errors } = useContext(MovieContext);

    return (
        <div className='movies'>
            {isLoading && <CustomContentLoader />}
            {!isLoading && errors?.message && <h1>Error</h1>}
            {!isLoading && !errors?.message && !movies?.results?.length && (
                <h1>No Movies Found</h1>
            )}
            {!isLoading &&
                !errors?.message &&
                movies?.results?.map((movie) => (
                    <Movie key={movie?._id} movie={movie} />
                ))}
        </div>
    );
};

export default MoviesList;
