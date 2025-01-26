import React from 'react';
import Header from '../Header/Header';
import NavBarSide from '../NavBarSide';
import CarCard from '../CarCard/CarCard';
import './HomePage.css';
import carsData from '../../data/Cars.json';

function HomePage() {
    const carCount = carsData.length;

    return (
        <div className="container">
            <Header />
            <div className="nav_card_div">
                <div className="navbar_side">
                    <NavBarSide />
                </div>
                <div className="car_container">
                    <div className="car_container_title">
                        <h3>Cars Catalogue</h3>
                        <p>{carCount}</p>
                    </div>
                    <div className="car_card">
                        {carsData.map((car, index) => (
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
