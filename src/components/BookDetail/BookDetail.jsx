import "../../styles/Loader.css";
import "./BookDetail.css";

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "AIzaSyCIxIIcpTwWrV5HmCj_q4AWZRAqD7y6CFI";

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
                <CircularProgress variant="indeterminate" size={200} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="book_details">
            <div className="book_cover_wrapper">
                <img src={img} alt="#" className="book_img" />
            </div>
            <div className="book_info_wrapper">
                <h2 className="book_title">{title}</h2>
                <p className="book_category">{category.join(", ")}</p>
                <h3>Authors</h3>
                <p className="book_authors">{authors.join(", ")}</p>
                <h3>Description</h3>
                <p className="book_description">{description}</p>
            </div>
        </div>
    );
};

export default BookDetail;
