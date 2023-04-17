import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './store/countries/countries-actions';

function App() {
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/country/:name' element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;