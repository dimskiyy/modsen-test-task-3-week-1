import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const handleLinkClick = () => {
        document.title = "Home Page";
    };

    return (
        <>
            <div className="header">
                <div className="header_wrapper">
                    <h1 className="header_title">
                        <Link
                            className="header_logo"
                            to={"/"}
                            onClick={handleLinkClick}
                        >
                            Search for books
                        </Link>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Header;
