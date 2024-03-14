import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BookFavorite = ({ isFavorite, toggleFavorite }) => {
    return (
        <>
            {isFavorite ? (
                <FavoriteIcon
                    sx={{ position: "absolute" }}
                    onClick={toggleFavorite}
                />
            ) : (
                <FavoriteBorderIcon
                    sx={{ position: "absolute" }}
                    onClick={toggleFavorite}
                />
            )}
        </>
    );
};

export default BookFavorite;
