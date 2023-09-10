import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './pagination.styles.css';
import { useContext } from 'react';
import { MovieContext } from '../../../Providers/MovieProvider';
const Pagination = () => {
    const {
        page,
        isLoading,
        movies: { next },
        setPage,
    } = useContext(MovieContext);
    return (
        !isLoading &&
        next && (
            <div className='pagination'>
                {page !== 1 && (
                    <button
                        className='page'
                        onClick={() => setPage((p) => p - 1)}
                    >
                        <FaChevronLeft />
                    </button>
                )}
                <button className='page number'>{page}</button>
                {next && (
                    <button
                        className='page'
                        onClick={() => setPage((p) => p + 1)}
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>
        )
    );
};

export default Pagination;
