import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    if (!book) {
        return null;
    }
    return (
        <Link to={`/Book/${book.id}`} className="book_card" key={book.id}>
            <div>
                <h2>{book.title}</h2>
            </div>
            <div>
                <img src={book.image_url} alt="#" />
            </div>
            <div>
                <p>{book.genres}</p>
            </div>
            <div>
                <p>{book.authors}</p>
            </div>
        </Link>
    );
};

export default BookCard;
