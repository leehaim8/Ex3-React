import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import GroupIcon from '@mui/icons-material/Group';
import './CarCard.css';

function CarCard(props) {
    const handleFavoriteClick = () => {
        console.log("clicked");
    };

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        import(`../../Assets/${props.image}`)
            .then(image => setImageSrc(image.default))
            .catch(err => console.error(err));
    }, [props.image]);

    return (
        <div className="card">
            <div className="card_header">
                <div className="card_header_title">
                    <h2>{props.name}</h2>
                    <p>{props.type}</p>
                </div>
                <IconButton onClick={handleFavoriteClick}>
                    <FavoriteBorderIcon />
                </IconButton>
            </div>
            <img src={imageSrc} alt={props.name} className="car-image" />
            <div className="card-details">
                <div className="detail">
                    <span role="img" aria-label="fuel"><LocalGasStationIcon /></span> {props.fuelCapacity}
                </div>
                <div className="detail">
                    <span role="img" aria-label="transmission"><CameraOutlinedIcon /></span> {props.transmission}
                </div>
                <div className="detail">
                    <span role="img" aria-label="capacity"><GroupIcon /></span> {props.capacity}
                </div>
            </div>
            <div className="card-footer">
                <div className="price">
                    <span className="price-value">${props.pricePerDay}.00/</span>
                    <span className="price-day">day</span>
                </div>
                <button className="rent-button">Rent Now</button>
            </div>
        </div>
    );
}

export default CarCard;
