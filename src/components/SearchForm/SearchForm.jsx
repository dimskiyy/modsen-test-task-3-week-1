import React, { useState } from "react";
import "./SearchForm.css"

const SearchForm = ({ setSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(query);
    };

    return (
        <div className="header_form">
           <form className="search_form">
            <input
                type="text"
                className="search_input"
                placeholder="Book name"
                value={query}
                onChange={(e) => setQuery(e.target.value)
                }
            ></input>
            <button className="search_btn" type="submit" onClick={handleSearch}>
                Submit
            </button>
        </form> 
        </div>
        
    );
};

export default SearchForm;