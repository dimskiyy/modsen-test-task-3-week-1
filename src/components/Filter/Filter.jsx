import React, { useState } from "react";
import "./Filter.css";

const Filter = ({
    selectedCategory,
    selectedSorting,
    onCategoryChange,
    onSortingChange,
}) => {
    const [category, setCategory] = useState(selectedCategory);
    const [sorting, setSorting] = useState(selectedSorting);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        onCategoryChange(value);
    };

    const handleSortingChange = (e) => {
        const value = e.target.value;
        setSorting(value);
        onSortingChange(value);
    };

    return (
        <div className="filter">
            <div>
                <label htmlFor="category" className="filter_label">
                    Category
                </label>
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    id="category"
                    className="filter_select"
                >
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="computers">Computers</option>
                    <option value="history">History</option>
                    <option value="medical">Medical</option>
                    <option value="poetry">Poetry</option>
                </select>
            </div>
            <div>
                <label htmlFor="sort" className="filter_label">
                    Sort by
                </label>
                <select
                    value={sorting}
                    onChange={handleSortingChange}
                    id="sort"
                    className="filter_select"
                >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
