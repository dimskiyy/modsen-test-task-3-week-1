import React from "react";
import BookDetail from "../components/BookDetail/BookDetail";
import Header from "../components/Header/Header";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Book = () => {
    return (
        <div>
            <Header />
            <ErrorBoundary>
                <BookDetail />
            </ErrorBoundary>
        </div>
    );
};

export default Book;
