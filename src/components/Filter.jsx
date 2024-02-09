import React, { useState } from "react";

const Filter = ({ selectedCategory, selectedSorting, onCategoryChange, onSortingChange }) => {
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
            <select
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="all">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
            <select
                value={sorting}
                onChange={handleSortingChange}
            >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
};

export default Filter;