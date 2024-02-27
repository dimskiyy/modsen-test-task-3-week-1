import React from "react";
import img from "assets/img/error.png";

const ErrorMessage = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <img
                style={{
                    display: "block",
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                    margin: "0 auto",
                    padding: "10px"
                }}
                src={img}
                alt="Error"
            />
            <h2
                style={{
                    width: "350px",
                    textAlign: "center"
                }}
            >
                Something went wrong! Try to use VPN(T_T)
            </h2>
        </div>
    );
};

export default ErrorMessage;
