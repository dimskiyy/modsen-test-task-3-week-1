import React, { memo, useCallback } from "react";

const LoadButton = memo(function LoadButton({ onClick }) {
    const handleClick = useCallback(
        (e) => {
            e.preventDefault();
            onClick();
        },
        [onClick]
    );

    return (
        <button className="load_btn" onClick={handleClick}>
            Load more
        </button>
    );
});

export default LoadButton;
