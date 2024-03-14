import React, { useState } from "react";
import AppContext from "hooks/useAppContext";

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorite = (book) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(book);
        setFavorites(newFavorites);
    };

    const removeToFavorite = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book) => book.id !== id);
        setFavorites(newFavorites);
    };

    return (
        <AppContext.Provider
            value={{ favorites, addToFavorite, removeToFavorite }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
