import Search from './Search';
import './body-styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Favourites from './Favourites';

const Body = () => {
    return (
        <div className='body'>
            <div className='top-bar'>
                <Search />
                {/* <div className='profile'>
                    <div className='profile-container'>
                        <img
                            src='https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A='
                            alt='john doe'
                        />
                    </div>
                    <p>Jane Doe</p>
                </div> */}
            </div>
            <div className='main'>
                <Routes>
                    <Route path='/' index element={<Home />} />
                    <Route path='/movie/:movieId' element={<MovieDetails />} />
                    <Route path='/favourites' element={<Favourites />} />
                </Routes>
            </div>
        </div>
    );
};

export default Body;
