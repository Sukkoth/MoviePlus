import { RiMovie2Line } from 'react-icons/ri';
import './sidebar-styles.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MovieContext } from '../../Providers/MovieProvider';
import {
    AiFillFire,
    AiFillStar,
    AiFillCalendar,
    AiFillHeart,
} from 'react-icons/ai';
import { MdTheaters } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
    const navigate = useNavigate();
    const { selection, handleSelectionChange, favourites } =
        useContext(MovieContext);
    return (
        <div className='sidebar'>
            <div className='title'>
                <RiMovie2Line className='icon' /> MOVIE PLUS
            </div>
            <div className='selectors'>
                <ul>
                    <li
                        className={`${
                            location.pathname === '/' &&
                            selection === 'popular' &&
                            'active'
                        }`}
                        onClick={() => handleSelectionChange('popular')}
                    >
                        <p>
                            <span>
                                <AiFillFire />
                            </span>
                            Popular
                        </p>
                    </li>
                    <li
                        className={`${
                            location.pathname === '/' &&
                            selection === 'topBoxOffice' &&
                            'active'
                        }`}
                        onClick={() => handleSelectionChange('topBoxOffice')}
                    >
                        <p>
                            <span>
                                <MdTheaters />
                            </span>
                            Top Box Office
                        </p>
                    </li>
                    <li
                        className={`${
                            location.pathname === '/' &&
                            selection === 'topRated' &&
                            'active'
                        }`}
                        onClick={() => handleSelectionChange('topRated')}
                    >
                        <p>
                            <span>
                                <AiFillStar />
                            </span>
                            Top Rated
                        </p>
                    </li>
                    <li
                        className={`${
                            location.pathname === '/' &&
                            selection === 'upcoming' &&
                            'active'
                        }`}
                        onClick={() => handleSelectionChange('upcoming')}
                    >
                        <p>
                            <span>
                                <AiFillCalendar />
                            </span>
                            Coming Soon
                        </p>
                    </li>
                    <li
                        className={`${
                            location.pathname === '/favourites' && 'active'
                        }`}
                        onClick={() => navigate('favourites')}
                    >
                        <p>
                            <span>
                                <AiFillHeart />
                            </span>
                            Favourites
                            {favourites?.length ? (
                                <span className='favourite-count'>
                                    {favourites?.length}
                                </span>
                            ) : (
                                ''
                            )}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    handleSelectionChange: PropTypes.func,
    selection: PropTypes.string,
};

export default SideBar;
