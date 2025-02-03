import React from 'react';
import SearchInput from '../SearchInput';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Header.css';

function Header(props) {
    const { isFavorite, setIsFavorite, onSearch } = props;

    const handleFavoriteClick = () => {
        setIsFavorite(prev => !prev);
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
    }

    return (
        <header>
            <a href="/HomePage"><div className="logo"></div></a>
            <div className="search_favorite_div">
                <SearchInput onSearch={onSearch} />
                <IconButton onClick={handleFavoriteClick} sx={iconButton}>
                    <FavoriteIcon color={isFavorite ? "error" : "inherit"} />
                </IconButton>
            </div>
        </header>
    );
}

export default Header;
