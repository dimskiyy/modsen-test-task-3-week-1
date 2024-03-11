import React, { memo } from "react";
import { Link } from "react-router-dom";
import { RoutesConfig } from "constants/Routes";

import "./BookCard.css";

const BookCard = memo(function BookCard({ id, img, title, authors, category }) {
    return (
        <div className="book_card">
            <Link to={`${RoutesConfig.BOOK_CARD}/${id}`} data-id={id}>
                <img
                    src={img}
                    className="card_img"
                    alt={title}
                    title={title}
                ></img>
            </Link>
            <>
                <h5 className="card_title">{title}</h5>
                <h6 className="card_category">{category?.[0]}</h6>
                <p className="card_authors">{authors?.join(", ")}</p>
            </>
        </div>
    );
});

export default BookCard;
