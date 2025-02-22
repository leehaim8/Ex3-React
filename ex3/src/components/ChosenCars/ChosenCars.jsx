import React from 'react';
import CarCard from '../CarCard/CarCard';
import { useFavoriteCars } from '../FavoriteCarsContext';
import './ChosenCars.css';

function ChosenCars(props) {
    const { favoriteCars, toggleFavorite } = useFavoriteCars();

    return (
        <div className="car_container">
            <div className="car_container_title">
                <h3>{props.isFavorite ? "Favorite Cars" : "Cars Catalogue"}</h3>
                <p>{props.cars.length}</p>
            </div>
            <div className="car_card">
                {props.cars.map((car, index) => (
                    <CarCard
                        key={index}
                        name={car.name}
                        type={car.type}
                        image={car.image}
                        fuelCapacity={car.fuelCapacity}
                        transmission={car.transmission}
                        capacity={car.capacity}
                        pricePerDay={car.pricePerDay}
                        isFavorite={favoriteCars.includes(car.name)}
                        onFavoriteClick={() => toggleFavorite(car.name)}
                        imageLink={`/car/${car.name}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ChosenCars;
