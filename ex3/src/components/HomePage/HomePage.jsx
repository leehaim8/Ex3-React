import React, { useState } from 'react';
import Header from '../Header/Header';
import NavBarSide from '../NavBarSide';
import CarCard from '../CarCard/CarCard';
import './HomePage.css';
import carsData from '../../data/Cars.json';

function HomePage() {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedCapacity, setSelectedCapacity] = useState([]);
    const [price, setPrice] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleFilterChange = (selectedTypes, selectedCapacity, price) => {
        setSelectedTypes(selectedTypes);
        setSelectedCapacity(selectedCapacity);
        setPrice(price);
    };

    const handleSearch = (input) => {
        setSearchInput(input.toLowerCase());
    };

    const filteredCars = carsData.filter(car => {
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
            <Header onSearch={handleSearch} />
            <div className="nav_card_div">
                <div className="navbar_side">
                    <NavBarSide onFilterChange={handleFilterChange} />
                </div>
                <div className="car_container">
                    <div className="car_container_title">
                        <h3>Cars Catalogue</h3>
                        <p>{filteredCars.length}</p>
                    </div>
                    <div className="car_card">
                        {filteredCars.map((car, index) => (
                            <CarCard
                                key={index}
                                name={car.name}
                                type={car.type}
                                image={car.image}
                                fuelCapacity={car.fuelCapacity}
                                transmission={car.transmission}
                                capacity={car.capacity}
                                pricePerDay={car.pricePerDay}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
