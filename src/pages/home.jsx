import React, { useState } from "react";
import BookList from "../components/BookList/BookList";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import Filter from "../components/Filter/Filter";
import "../components/styles/Layout.css";

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
            <BookList search={search} category={category} sorting={sorting} />
        </div>
    );
};

export default Home;
