import React, { useState } from "react";

const SearchForm = ({ setSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(query);
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