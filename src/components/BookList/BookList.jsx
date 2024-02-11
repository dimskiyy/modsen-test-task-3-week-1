import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/Loader.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const BookList = ({ search, category, sorting }) => {
    const [books, setBooks] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [startId, setStartId] = useState(0);
    const [initialTotalItems, setInitialTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30&orderBy=${sorting}&startIndex=${startId}`
            )
            .then((res) => {
                let filteredBooks = res.data.items;

                if (category !== "all") {
                    filteredBooks = filteredBooks.filter(
                        (book) =>
                            book.volumeInfo.categories &&
                            book.volumeInfo.categories
                                .map((cat) => cat.toLowerCase())
                                .includes(category.toLowerCase())
                    );

                    if (startId === 0) {
                        setInitialTotalItems(filteredBooks.length);
                    }
                } else {
                    if (startId === 0) {
                        setInitialTotalItems(res.data.totalItems);
                    }
                }

                setTotalItems(filteredBooks.length);
                setBooks(filteredBooks);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [search, category, sorting, startId]);

    return (
        <div >
            {loading ? (
                <div className="circularProgressContainer">
                    <CircularProgress size={200} />
                </div>
            ) : (
                <>
                    <p className="result">Found {initialTotalItems} books</p>
                    <div className="book_list">
                        {books.map((book) => (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                img={
                                    book.volumeInfo.imageLinks?.thumbnail ||
                                    "https://via.placeholder.com/180x250/566273/FFFFFF?text=no%20image"
                                }
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                category={book.volumeInfo.categories}
                            />
                        ))}
                    </div>
                    {books.length > 0 && initialTotalItems > 30 && (
                        <div className="load_more">
                            <button className="load_btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setStartId(
                                        (prevStartIndex) => prevStartIndex + 30
                                    );
                                }}
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default BookList;
