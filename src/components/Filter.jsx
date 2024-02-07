import React, { useState } from "react";

const Filter = () => {
    const [category, setCategory] = useState("all");
    const [sorting, setSorting] = useState("relevance");

    return (
        <div className="filter">
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setSorting(e.target.value)}
            >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
};

export default Filter;
