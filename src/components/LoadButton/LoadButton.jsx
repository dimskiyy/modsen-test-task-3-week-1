import React, { memo } from "react";

const LoadButton = memo(function LoadButton({ onClick }) {
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return (
        <button className="load_btn" onClick={handleClick}>
            Load more
        </button>
    );
});

export default LoadButton;
