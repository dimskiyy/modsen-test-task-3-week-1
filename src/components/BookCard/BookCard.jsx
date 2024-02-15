import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

const BookCard = (props) => {
    const { id, img, title, authors, category } = props;

    return (
        <Link to={`/Book/${id}`} className="book_card" data-id={id}>
            <img src={img} className="card_img" alt={title} title={title}></img>
            <div>
                <h5 className="card_title">{title}</h5>
                <h6 className="card_category">{category?.slice(0, 1)}</h6>
                <p className="card_authors">{authors?.join(", ")}</p>
            </div>
        </Link>
    );
};

export default BookCard;
