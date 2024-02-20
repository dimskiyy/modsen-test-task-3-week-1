import React from "react";

import img from "./error.gif";

const ErrorMessage = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <img
                style={{
                    display: "block",
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                    margin: "0 auto",
                }}
                src={img}
                alt="Error"
            />
            <h2
                style={{
                    width: "350px",
                    textAlign: "center",
                }}
            >
                Something went wrong! Try to use VPN(T_T)
            </h2>
        </div>
    );
};

export default ErrorMessage;
