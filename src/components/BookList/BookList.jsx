import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";
const API_KEY = process.env.REACT_APP_API_KEY;

const BookList = ({ search, category, sorting }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30&orderBy=${sorting}`
            )
            .then((res) => {
                let filteredBooks = res.data.items;

                if (category !== "all") {
                    filteredBooks = filteredBooks.filter(book =>
                        book.volumeInfo.categories && book.volumeInfo.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
                    );
                }

                setBooks(filteredBooks);
            })
            .catch((err) => console.log(err));
    }, [search, category, sorting]);

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
