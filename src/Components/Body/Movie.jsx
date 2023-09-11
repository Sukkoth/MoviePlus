import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useContext } from 'react';
import { MovieContext } from '../../Providers/MovieProvider';
const Movie = ({ movie }) => {
    const navigate = useNavigate();
    const { favourites, handleFavouriteAction } = useContext(MovieContext);
    const fallBackImage =
        'https://media.istockphoto.com/id/931419844/vector/vector-popcorn-icon-on-a-white-background.jpg?s=612x612&w=0&k=20&c=iC_tk4oZ0v90qTmLP8j64hUAiGYgjOHWd-57rFHry_k=';
    function onImageLoadingFailed(e) {
        e.preventDefault();
        e.target.src = fallBackImage;
    }

    return (
        <div className='movie'>
            <div className='cover-container'>
                <p
                    className='badge'
                    onClick={() => handleFavouriteAction(movie)}
                >
                    {favourites.find((fav) => fav?.id === movie?.id) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}
                </p>
                <img
                    onError={onImageLoadingFailed}
                    src={movie?.primaryImage?.url || fallBackImage}
                    alt={movie?.originalTitleText?.text + ' poster'}
                    onClick={() => navigate(`/movie/${movie?.id}`)}
                />
            </div>
            <p className='movie-title'>{movie?.originalTitleText?.text}</p>
            <p className='category'>{movie?.releaseYear?.year}</p>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object,
};

export default Movie;
