import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './movieDetails.styles.css';
import Video from './Video';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://www.omdbapi.com/?i=${movieId}&apikey=50ec3be2`
                );
                setData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovieDetails();
    }, [movieId]);
    return (
        <div className='movie-details'>
            {isLoading && <h1>Loading . . . </h1>}
            {!isLoading && data?.Title && (
                <>
                    <div className='poster'>
                        <img src={data?.Poster} alt='' />
                    </div>
                    <div className='details'>
                        <h1>
                            {data?.Title} <span>{data?.imdbRating}</span>
                        </h1>
                        <p>
                            {data?.Year} | {data?.Runtime} | {data?.Rated}
                        </p>
                        <p className='plot'>{data?.Plot}</p>
                        <p>
                            <span className='strong'>Starring:</span>{' '}
                            {data?.Actors}
                        </p>
                        <p>
                            <span className='strong'>Directed By:</span>{' '}
                            {data?.Director}
                        </p>
                        <p>
                            <span className='strong'>Genre:</span> {data?.Genre}
                        </p>

                        <div className='videos'>
                            <Video title={data?.Title} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetails;
