import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Stats from './pages/Stats';
import Settings from './pages/Settings';


function App () {
    return (
        <>
            <section>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/Profile' element={<Profile/>}></Route>
                        <Route path='/Stats' element={<Stats/>}></Route>
                        <Route path='/Settings' element={<Settings/>}></Route>
                    </Routes>
            </section>
        </>
    )
};

export default App;