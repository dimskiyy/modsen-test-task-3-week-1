import React from 'react';

const BookCard = ({book, onClick}) => {
    return (
        <div className='book_card' onClick={()=>onClick(book)}>
            <img src={book.img} alt="Book cover" />
            <h3>{book.title}</h3>
            <p>{book.category}</p>
            <p>{book.authors?.join(", ")}</p>
        </div>
    );
};

export default BookCard;