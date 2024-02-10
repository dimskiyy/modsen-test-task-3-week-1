import React, { useState } from "react";
import BookList from "../components/BookList/BookList";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";

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
        <div>
            <Header />
            <div>
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
