import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import BookCard from "./BookCard";

describe("BookCard component", () => {
    const book = {
        id: "1",
        img: "image.jpg",
        title: "Book Title",
        authors: ["Author 1", "Author 2"],
        category: ["Category 1", "Category 2"]
    };

    it("renders book card correctly", () => {
        const { getByText, getByAltText } = render(
            <Router>
                <BookCard {...book} />
            </Router>
        );
        expect(getByAltText("Book Title")).toBeInTheDocument();
        expect(getByText("Book Title")).toBeInTheDocument();
        expect(getByText("Category 1")).toBeInTheDocument();
        expect(getByText("Author 1, Author 2")).toBeInTheDocument();
    });

    it("renders link with correct path", () => {
        const { getByRole } = render(
            <Router>
                <BookCard {...book} />
            </Router>
        );
        const link = getByRole("link");
        expect(link).toHaveAttribute("href", `/Book/${book.id}`);
    });
});