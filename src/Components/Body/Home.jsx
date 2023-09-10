import Genres from './Genres';
import MoviesList from './MoviesList';
import Pagination from './Pagination/Pagination';

const Home = () => {
    return (
        <>
            <div className='body-title'>
                <h1>New Releases</h1>
            </div>
            <Genres />
            <MoviesList />
            <Pagination />
        </>
    );
};

export default Home;
