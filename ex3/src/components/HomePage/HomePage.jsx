import React, { useState } from 'react';
import Header from '../Header/Header';
import NavBarSide from '../NavBarSide';
import ChosenCars from '../ChosenCars/ChosenCars';
import Footer from '../Footer/Footer';
import carsData from '../../data/Cars.json';
import { useFavoriteCars } from '../FavoriteCarsContext';
import './HomePage.css';

function HomePage() {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedCapacity, setSelectedCapacity] = useState([]);
    const [price, setPrice] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const { favoriteCars, toggleFavorite, isFavorite, setIsFavorite } = useFavoriteCars();

    const handleFilterChange = (selectedTypes, selectedCapacity, price) => {
        setSelectedTypes(selectedTypes);
        setSelectedCapacity(selectedCapacity);
        setPrice(price);
    };

    const handleSearch = (input) => {
        setSearchInput(input.toLowerCase());
    };

    const filteredCars = isFavorite
        ? carsData.filter(car => favoriteCars.includes(car.name))
        : carsData.filter(car => {
            const carsFound = car.name.toLowerCase().includes(searchInput);
            if (searchInput) {
                return carsFound;
            }

            const typeFound = selectedTypes.length === 0 || selectedTypes.includes(car.type);
            const capacityFound = selectedCapacity.length === 0 || selectedCapacity.includes(car.capacity);
            const priceFound = car.pricePerDay <= price;
            return typeFound && capacityFound && priceFound;
        });

    return (
        <div className="container">
            <Header onSearch={handleSearch} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
            <div className="nav_card_div">
                <div className="navbar_side">
                    <NavBarSide onFilterChange={handleFilterChange} />
                </div>
                <ChosenCars cars={filteredCars} favoriteCars={favoriteCars} onFavoriteClick={toggleFavorite} isFavorite={isFavorite} />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
