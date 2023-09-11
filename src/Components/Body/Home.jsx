import Genres from './Genres';
import MoviesList from './MoviesList';
import Pagination from './Pagination/Pagination';

const Home = () => {
    return (
        <>
            <Genres />
            <MoviesList />
            <Pagination />
        </>
    );
};

export default Home;
