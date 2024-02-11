import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles/Loader.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");

        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
            )
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Error fetching book data.");
                setLoading(false);
            });
    }, [id]);

    const img = book.volumeInfo?.imageLinks?.thumbnail || "";
    const title = book.volumeInfo?.title || "";
    const authors = book.volumeInfo?.authors || [];
    const category = book.volumeInfo?.categories || [];
    const description = book.volumeInfo?.description || "";

    useEffect(() => {
        document.title = title;
    }, [title]);

    if (loading) {
        return (
            <div className="circularProgressContainer">
                <CircularProgress size={200} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
