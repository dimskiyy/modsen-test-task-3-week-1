import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_wrapper">
                    <h1 className="header_title">
                        <Link
                            className="header_logo"
                            to={"/"}
                            onClick={() => (document.title = "Home Page")}
                        >
                            Books API App
                        </Link>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Header;
