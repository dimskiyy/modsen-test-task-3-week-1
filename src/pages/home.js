import React from "react";
import BookCard from "../components/BookCard";
import Filter from "../components/Filter";
import Header from "../components/Header";

const Home = () => {
    const testData = {
        title: "Hamlet",
        img: "pic.jpg",
        category: "poetry",
        authors: ["Shakespeare"],
    };

    const testHandleClick = (book) => {
        console.log("Clicked on book:", book.title);
    };

    return (
        <div>
            <Header />
            <Filter />
            <h1>Home page</h1>
            <BookCard book={testData} onClick={testHandleClick} />
            <BookCard book={testData} onClick={testHandleClick} />
        </div>
    );
};

export default Home;
