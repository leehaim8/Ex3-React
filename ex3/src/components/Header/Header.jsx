import React, { useState, useEffect } from 'react';
import SearchInput from '../SearchInput';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (location.pathname === '/FavoriteCars') {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [location.pathname]);

    const handleFavoriteClick = () => {
        if (location.pathname !== '/FavoriteCars') {
            setIsFavorite(true);
            navigate('/FavoriteCars');
        }
    };

    const iconButton = {
        width: "44px",
        height: "44px",
        flexShrink: 0,
        borderRadius: "90px",
        border: "1px solid rgba(195, 212, 233, 0.40)",
        opacity: 0.8,
        color: isFavorite ? "red" : "grey",
        marginRight: "30px",
        '@media (max-width: 1420px)': {
            width: "36px",
            height: "36px",
            marginRight: "30px",
        },
        '@media (max-width: 670px)': {
            width: "30px",
            height: "30px",
            marginRight: "30px",
        }
    }

    return (
        <header>
            <a href="/HomePage"><div className="logo"></div></a>
            <div className="search_favorite_div">
                <SearchInput />
                <IconButton onClick={handleFavoriteClick} sx={iconButton}>
                    <FavoriteIcon />
                </IconButton>
            </div>
        </header>
    );
}

export default Header;
