import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
const Movie = ({ movie }) => {
    const navigate = useNavigate();
    const fallBackImage =
        'https://media.istockphoto.com/id/931419844/vector/vector-popcorn-icon-on-a-white-background.jpg?s=612x612&w=0&k=20&c=iC_tk4oZ0v90qTmLP8j64hUAiGYgjOHWd-57rFHry_k=';
    function onImageLoadingFailed(e) {
        e.preventDefault();
        e.target.src = fallBackImage;
    }
    return (
        <div className='movie' onClick={() => navigate(`/movie/${movie?.id}`)}>
            <div className='cover-container'>
                <p className='badge'>
                    <AiFillHeart />
                </p>
                <img
                    onError={onImageLoadingFailed}
                    src={movie?.primaryImage?.url || fallBackImage}
                    alt={movie?.originalTitleText?.text + ' poster'}
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
