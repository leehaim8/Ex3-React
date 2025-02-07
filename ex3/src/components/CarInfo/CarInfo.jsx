import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import NavBarSide from '../NavBarSide';
import Footer from '../Footer/Footer';
import carsData from '../../data/Cars.json';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useFavoriteCars } from '../FavoriteCarsContext';
import './CarInfo.css';

function CarInfo() {
    const { carName } = useParams();
    const [imageSrc, setImageSrc] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const { favoriteCars, toggleFavorite, isFavorite, setIsFavorite } = useFavoriteCars();

    const car = carsData.find(car => car.name === carName);

    useEffect(() => {
        if (car) {
            import(`../../Assets/${car.gallery[0]}`)
                .then(image => setImageSrc(image.default))
                .catch(err => console.error(err));

            Promise.all(
                car.gallery.map(img =>
                    import(`../../Assets/${img}`)
                        .then(image => image.default)
                        .catch(err => {
                            console.error(`Error loading ${img}:`, err);
                            return null;
                        })
                )
            ).then(images => {
                setGalleryImages(images.filter(Boolean));
            });
        }
    }, [car]);

    const isCarFavorite = favoriteCars.includes(car.name);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) =>
            index < rating ? <StarIcon key={index} className="star-filled" /> : <StarBorderIcon key={index} className="star-empty" />
        );
    };

    return (
        <div className="container">
            <Header onSearch={() => { }} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
            <div className="nav_card_div">
                <div className="navbar_side">
                    <NavBarSide onFilterChange={() => { }} />
                </div>
                <div className="car_info_container">
                    <h3>Car Details</h3>
                    <div className="car_details_container">
                        <div className="car_highlight">
                            <img src={imageSrc} alt={car.name} className="car_main_image" />
                            <div className="sub_pictures_container">
                                {galleryImages.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`${index}`}
                                        className="sub_pictures"
                                        onClick={() => setImageSrc(imgSrc)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="car_specs">
                            <div className="card_header">
                                <div className="card_header_title">
                                    <h2>{car.name}</h2>
                                    <div className="review-section">
                                        {renderStars(car.rating)}
                                        <span className="review-count">({car.rating} reviews)</span>
                                    </div>
                                </div>
                                <IconButton onClick={() => toggleFavorite(car.name)}>
                                    {isCarFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>
                            <p className="car_description">{car.shortDescription}</p>

                            <div className="specs-grid">
                                <div className="spec-item">
                                    <p className="spec-key">Type:</p>
                                    <p className="spec-value">{car.type}</p>
                                </div>
                                <div className="spec-item">
                                    <p className="spec-key">Capacity:</p>
                                    <p className="spec-value">{car.capacity}</p>
                                </div>
                                <div className="spec-item">
                                    <p className="spec-key">Steering:</p>
                                    <p className="spec-value">{car.transmission}</p>
                                </div>
                                <div className="spec-item">
                                    <p className="spec-key">Fuel:</p>
                                    <p className="spec-value">{car.fuelCapacity}</p>
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="price">
                                    <span className="price-value">${car.pricePerDay}.00/</span>
                                    <span className="price-day">day</span>
                                </div>
                                <button className="rent-button">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CarInfo;
