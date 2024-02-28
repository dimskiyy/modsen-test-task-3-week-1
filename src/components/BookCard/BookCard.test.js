import React from "react";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

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
            <MemoryRouter>
                <BookCard {...book} />
            </MemoryRouter>
        );
        expect(getByAltText("Book Title")).toBeInTheDocument();
        expect(getByText("Book Title")).toBeInTheDocument();
        expect(getByText("Category 1")).toBeInTheDocument();
        expect(getByText("Author 1, Author 2")).toBeInTheDocument();
    });

    it("renders link with correct path", () => {
        const { getByRole } = render(
            <MemoryRouter>
                <BookCard {...book} />
            </MemoryRouter>
        );
        const link = getByRole("link");
        expect(link).toHaveAttribute("href", `/Book/${book.id}`);
    });
});
