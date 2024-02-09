import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
            )
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const img = book.volumeInfo?.imageLinks?.thumbnail || "";
    const title = book.volumeInfo?.title || "";
    const authors = book.volumeInfo?.authors || [];
    const category = book.volumeInfo?.categories || [];
    const description = book.volumeInfo?.description || "";

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="book_details">
            <div>
                <img src={img} alt="#" />
            </div>
            <div>
                <h2>Category</h2>
                <p>{category.join(", ")}</p>
                <h2>{title}</h2>
                <h2>Authors</h2>
                <p>{authors.join(", ")}</p>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BookDetail;
