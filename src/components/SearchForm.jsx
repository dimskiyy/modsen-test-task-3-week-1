import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query.trim());
        }
    };

    return (
        <form className="search_form">
            <input
                type="text"
                placeholder="Book name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button type="submit" onClick={handleSearch}>
                Submit
            </button>
        </form>
    );
};

export default SearchForm;
