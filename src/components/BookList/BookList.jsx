import React, { useState, useEffect } from "react";
import axios from "axios";
import { testData } from "../../test_data";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(testData)
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="book_list">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
