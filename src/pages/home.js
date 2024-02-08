import React, { useState } from "react";
import BookCard from "../components/BookCard";
import BookList from "../components/BookList";
import Filter from "../components/Filter";
import Header from "../components/Header";

const Home = () => {

    return (
        <div>
            <Header />
            <Filter />
            <BookList/>
        </div>
    );
};

export default Home;
