import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";
const API_KEY = process.env.REACT_APP_API_KEY;

const BookList = () => {
    const [books, setBooks] = useState([]);
    const search = "flower"

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=" +
                ${search} +
                "&key=${API_KEY}`
            )
            .then((res) => {
                console.log(res.data.items);
                setBooks(res.data.items);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
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
    );
};

export default BookList;
