import React, { useState } from 'react';
import { Box, Typography, Slider, Checkbox, FormControlLabel, Divider } from '@mui/material';
import carsData from '../data/Cars.json';

function NavBarSide() {
    const carType = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
    const capacity = ["2 Person", "4 Person", "6 Person"];

    const carTypeCounts = carType.reduce((counts, type) => {
        counts[type] = carsData.filter(car => car.type === type).length;
        return counts;
    }, {});

    const carMaxPrice = Math.max(...carsData.map(car => car.pricePerDay));

    const [selectedTypes, setSelectedTypes] = useState(carType);
    const [selectedCapacity, setSelectedCapacity] = useState(capacity);
    const [price, setPrice] = useState(carMaxPrice);

    const handleSliderChange = (event, newValue) => {
        setPrice(newValue);
    };

    const handleCarTypeChange = (event) => {
        const { value } = event.target;
        setSelectedTypes(prevSelected => {
            if (prevSelected.length === 1 && prevSelected.includes(value)) {
                return prevSelected;
            }

            return prevSelected.includes(value) ? prevSelected.filter(type => type !== value) : [...prevSelected, value];
        });
    };

    const handleCapacityChange = (event) => {
        const { value } = event.target;
        setSelectedCapacity(prevSelected => {
            return prevSelected.includes(value) ? prevSelected.filter(cap => cap !== value) : [...prevSelected, value];
        });
    };

    const NavBar = {
        width: "360px",
        flexShrink: 0,
        display: "flex",
        padding: "32px 32px 816px 32px",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "fixed",
        marginTop: "124px",
        borderRight: "1px solid #F3F5F7",
        '@media (max-width: 1420px)': {
            width: "270px",
        },
        '@media (max-width: 670px)': {
            width: "120px",
        }
    }

    const filterCategory = {
        color: "#90A3BF",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        letterSpacing: "-0.24px"
    }

    const filterLabel = {
        color: "#596780",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "150%",
        letterSpacing: "-0.4px"
    }

    return (
        <Box variant="permanent" anchor="left" sx={NavBar}>
            <Typography variant="h6" sx={filterCategory}>
                T Y P E
            </Typography>
            {carType.map((type, index) => (
                <FormControlLabel
                    key={index}
                    control={<Checkbox checked={selectedTypes.includes(type)} onChange={handleCarTypeChange} value={type} />}
                    label={`${type} (${carTypeCounts[type]})`}
                    sx={filterLabel}
                />
            ))}

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={filterCategory}>
                C A P A C I T Y
            </Typography>
            {capacity.map((capacity, index) => (
                <FormControlLabel
                    key={index}
                    control={<Checkbox checked={selectedCapacity.includes(capacity)} onChange={handleCapacityChange} value={capacity} />}
                    label={capacity}
                    sx={filterLabel}
                />))}

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={filterCategory}>
                P R I C E  ( P E R   D A Y)
            </Typography>
            <Slider
                value={price}
                onChange={handleSliderChange}
                max={carMaxPrice}
                min={0}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
            />
            <Typography variant="body2" sx={filterLabel}>
                Max: ${carMaxPrice}.00
            </Typography>
        </Box>
    )
}

export default NavBarSide;
