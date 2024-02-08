import React from "react";
import SearchForm from "./SearchForm";
import Filter from "./Filter";
import "./Header.css";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header_logo">
                    <div className="header_title">
                        <h1>Search for books</h1>
                    </div>
                </div>
                <SearchForm />
                <Filter />
            </header>
        </>
    );
};

export default Header;
