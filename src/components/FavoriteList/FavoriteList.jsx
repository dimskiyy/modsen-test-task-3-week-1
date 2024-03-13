import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useAppContext } from "context/appContext";

import BookCard from "components/BookCard/BookCard";

const FavouriteList = () => {
    const { favorites } = useAppContext();
    const [favoriteBooks, setFavoriteBooks] = useState([]);

    useEffect(() => {
        setFavoriteBooks(favorites);
    }, [favorites]);

    return (
        <div>
            <Typography variant="h2" textAlign="center" m={4}>
                Favorite books
            </Typography>
            {favoriteBooks.length === 0 ? (
                <Typography textAlign="center" variant="h4">
                    The list of favorite books is empty
                </Typography>
            ) : (
                <div className="book_list">
                    {favoriteBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            id={book.id}
                            img={book.img}
                            title={book.title}
                            authors={book.authors}
                            category={book.category}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouriteList;
