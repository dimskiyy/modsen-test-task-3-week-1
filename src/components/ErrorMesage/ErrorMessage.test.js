import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import React from "react";

import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage component", () => {
    it("renders error message correctly", () => {
        const { getByAltText, getByText } = render(<ErrorMessage />);
        const errorImage = getByAltText("Error");
        const errorMessage = getByText(
            "Something went wrong! Try to use VPN(T_T)"
        );
        expect(errorImage).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();
    });

    it("renders error image with correct source", () => {
        const { getByAltText } = render(<ErrorMessage />);
        const errorImage = getByAltText("Error");
        expect(errorImage).toHaveAttribute("src", "error.gif");
    });

    it("renders error message with correct text", () => {
        const { getByText } = render(<ErrorMessage />);
        const errorMessage = getByText(
            "Something went wrong! Try to use VPN(T_T)"
        );
        expect(errorMessage).toBeInTheDocument();
    });
});
