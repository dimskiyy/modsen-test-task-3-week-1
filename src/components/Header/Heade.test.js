import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

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

    it("changes document title when link is clicked", () => {
        const oldTitle = document.title;
        render(
            <Router>
                <Header />
            </Router>
        );
        const linkElement = document.querySelector(".header_logo");
        fireEvent.click(linkElement);
        expect(document.title).toEqual("Home Page");
        document.title = oldTitle;
    });
});
