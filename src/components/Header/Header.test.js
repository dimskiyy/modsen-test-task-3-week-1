import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";

describe("Header component", () => {
    it("renders header title correctly", () => {
        const { getByText } = render(
            <Router>
                <Header />
            </Router>
        );
        const titleElement = getByText("Search for books");
        expect(titleElement).toBeInTheDocument();
    });
});
