import React from "react";

import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import FavouriteList from "components/FavoriteList/FavoriteList";
import Header from "components/Header/Header";

import "styles/Layout.css";

const Favorites = () => {
    return (
        <>
            <div className="header_detail">
                <Header />
            </div>
            <ErrorBoundary>
                <FavouriteList />
            </ErrorBoundary>
        </>
    );
};

export default Favorites;
