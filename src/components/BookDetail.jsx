import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookData } from "../test_data";
import axios from "axios";

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios
            .get(`${bookData}/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((error) => console.log(error));
    }, [id]);
    return (
        <div className="book_details">
            <div>
                <img src={book?.image_url} alt="#" />
            </div>
            <div>
                <h2>Category</h2>
                <p>{book?.genres}</p>
                <h2>{book?.title}</h2>
                <h2>Authors</h2>
                <p>{book?.authors}</p>
                <h2>Description</h2>
                <p>{book?.description}</p>
            </div>
        </div>
    );
};

export default BookDetail;
