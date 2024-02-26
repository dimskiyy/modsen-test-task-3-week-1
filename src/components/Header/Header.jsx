import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { RoutesConfig } from "../../constants/Routes";

import "./Header.css";

const Header = () => {
    useEffect(() => {
        document.title = "Home Page";
    }, []);

    return (
        <>
            <div className="header">
                <div className="header_wrapper">
                    <h1 className="header_title">
                        <Link className="header_logo" to={RoutesConfig.HOME}>
                            Search for books
                        </Link>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Header;
