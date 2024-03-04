import React from "react";
import { Link } from "react-router-dom";
import { RoutesConfig } from "constants/Routes";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1 className="header_title">
                <Link className="header_logo" to={RoutesConfig.HOME}>
                    Search for books
                </Link>
            </h1>
        </div>
    );
};

export default Header;
