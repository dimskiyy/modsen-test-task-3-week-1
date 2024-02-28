import React from "react";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";

describe("Header component", () => {
    it("renders header title correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        const titleElement = getByText("Search for books");
        expect(titleElement).toBeInTheDocument();
    });

    it("renders a link to home page with correct route", () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        const link = getByRole("link");
        expect(link.closest("a")).toHaveAttribute("href", "/");
    });
});
