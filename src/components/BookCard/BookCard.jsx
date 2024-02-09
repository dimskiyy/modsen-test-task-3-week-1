import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard(props) {
    const { id, img, title, authors, category } = props;
  
    return (
      <Link to={`/Book/${id}`} className="book_card" data-id={id}>
        <img src={img} className="card_img" alt={title} title={title}></img>
        <div className="card_body">
          <h5>{title}</h5>
          <h6>{category?.slice(0, 1)}</h6>
          <p>{authors?.join(', ')}</p>
        </div>
      </Link>
    );
  }

export default BookCard;
