import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CarInfo from './CarInfo/CarInfo';
import { FavoriteCarsProvider } from './FavoriteCarsContext';

function App() {
    return (
        <FavoriteCarsProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/car/:carName" element={<CarInfo />} />
            </Routes>
        </FavoriteCarsProvider>
    )
}

export default App;