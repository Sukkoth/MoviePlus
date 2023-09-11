import { useContext } from 'react';
import Movie from './Movie';
import './movies.styles.css';
import { MovieContext } from '../../Providers/MovieProvider';

const Favourites = () => {
    const { favourites } = useContext(MovieContext);
    return (
        <div className='movies'>
            {!favourites?.length && <h1>No Favourite Movies Found</h1>}
            {favourites?.map((movie) => (
                <Movie key={movie?._id} movie={movie} />
            ))}
        </div>
    );
};

export default Favourites;
