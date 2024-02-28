import React, { memo, useCallback, useState } from "react";
import { categories, sortingOptions } from "constants/Categories";

import Select from "components/Select/Select";

import "./Filter.css";

const Filter = memo(function Filter({
    selectedCategory,
    selectedSorting,
    onCategoryChange,
    onSortingChange
}) {
    const [category, setCategory] = useState(selectedCategory);
    const [sorting, setSorting] = useState(selectedSorting);

    const handleCategoryChange = useCallback(
        (e) => {
            const value = e.target.value;
            setCategory(value);
            onCategoryChange(value);
        },
        [onCategoryChange]
    );

    const handleSortingChange = useCallback(
        (e) => {
            const value = e.target.value;
            setSorting(value);
            onSortingChange(value);
        },
        [onSortingChange]
    );

    return (
        <div className="filter">
            <Select
                label="Category"
                value={category}
                options={categories}
                onChange={handleCategoryChange}
                id="category"
            />
            <Select
                label="Sort by"
                value={sorting}
                options={sortingOptions}
                onChange={handleSortingChange}
                id="sort"
            />
        </div>
    );
});

export default Filter;
