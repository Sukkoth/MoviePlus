import Body from './Components/Body/Body';
import SideBar from './Components/SideBar/SideBar';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
    const [selection, setSelection] = useState('popular');
    function handleSelection(text) {
        setSelection(text);
    }
    return (
        <div className='main'>
            <SideBar selection={selection} onSelection={handleSelection} />
            <Routes>
                <Route path='*' element={<Body selector={selection} />} />
            </Routes>
        </div>
    );
}
export default App;
//pages
