import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header_wrapper">
                    <div className="header_title">
                        <Link className="header_logo" to={"/"}>
                            <h1>Books API App</h1>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
