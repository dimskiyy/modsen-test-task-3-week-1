import React, { useState } from "react";

import BookList from "../components/BookList/BookList";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Filter from "../components/Filter/Filter";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";

import "../styles/Layout.css";

const Home = () => {
    const [search, setSearch] = useState("js");
    const [category, setCategory] = useState("all");
    const [sorting, setSorting] = useState("relevance");

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const handleSortingChange = (selectedSorting) => {
        setSorting(selectedSorting);
    };

    return (
        <div className="main-container">
            <ErrorBoundary>
                <div className="header_search_filter">
                    <Header />
                    <SearchForm setSearch={setSearch} />
                    <Filter
                        selectedCategory={category}
                        selectedSorting={sorting}
                        onCategoryChange={handleCategoryChange}
                        onSortingChange={handleSortingChange}
                    />
                </div>
                <BookList
                    search={search}
                    category={category}
                    sorting={sorting}
                />
            </ErrorBoundary>
        </div>
    );
};

export default Home;
