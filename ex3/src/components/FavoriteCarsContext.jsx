import { createContext, useState, useContext } from 'react';

const FavoriteCarsContext = createContext();

export const FavoriteCarsProvider = ({ children }) => {
    const [favoriteCars, setFavoriteCars] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (carName) => {
        setFavoriteCars((prevFavorites) =>
            prevFavorites.includes(carName)
                ? prevFavorites.filter(name => name !== carName)
                : [...prevFavorites, carName]
        );
    };

    return (
        <FavoriteCarsContext.Provider value={{ favoriteCars, toggleFavorite, isFavorite, setIsFavorite }}>
            {children}
        </FavoriteCarsContext.Provider>
    );
};

export const useFavoriteCars = () => useContext(FavoriteCarsContext);
