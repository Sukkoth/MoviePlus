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
const SideBar = () => {
    const { selection, handleSelectionChange } = useContext(MovieContext);
    console.log('selection', selection);
    return (
        <div className='sidebar'>
            <div className='title'>
                <RiMovie2Line className='icon' /> MOVIE PLUS
            </div>
            <div className='selectors'>
                <ul>
                    <li
                        className={`${selection === 'popular' && 'active'}`}
                        onClick={() => handleSelectionChange('popular')}
                    >
                        <p>
                            <span>
                                <AiFillFire />
                            </span>{' '}
                            Popular
                        </p>
                    </li>
                    <li
                        className={`${
                            selection === 'topBoxOffice' && 'active'
                        }`}
                        onClick={() => handleSelectionChange('topBoxOffice')}
                    >
                        <p>
                            <span>
                                <MdTheaters />
                            </span>{' '}
                            Top Box Office
                        </p>
                    </li>
                    <li
                        className={`${selection === 'topRated' && 'active'}`}
                        onClick={() => handleSelectionChange('topRated')}
                    >
                        <p>
                            {' '}
                            <span>
                                <AiFillStar />
                            </span>
                            Top Rated
                        </p>
                    </li>
                    <li
                        className={`${selection === 'upcoming' && 'active'}`}
                        onClick={() => handleSelectionChange('upcoming')}
                    >
                        <p>
                            {' '}
                            <span>
                                <AiFillCalendar />
                            </span>
                            Coming Soon
                        </p>
                    </li>
                    <li
                        className={`${selection === 'Favourites' && 'active'}`}
                        onClick={() => handleSelectionChange('Favourites')}
                    >
                        <p>
                            {' '}
                            <span>
                                <AiFillHeart />
                            </span>
                            Favourites
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
