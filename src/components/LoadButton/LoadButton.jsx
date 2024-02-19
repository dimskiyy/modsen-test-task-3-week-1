import React from "react";

const LoadButton = ({ onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return (
        <button className="load_btn" onClick={handleClick}>
            Load more
        </button>
    );
};

export default LoadButton;
