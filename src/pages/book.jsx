import React from "react";
import BookDetail from "../components/BookDetail/BookDetail";
import Header from "../components/Header/Header";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "../components/styles/Layout.css";

const Book = () => {
    return (
        <div>
            <div className="header_detail">
                <Header />
            </div>
            <ErrorBoundary>
                <BookDetail />
            </ErrorBoundary>
        </div>
    );
};

export default Book;
