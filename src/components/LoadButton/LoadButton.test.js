import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render } from "@testing-library/react";
import React from "react";

import LoadButton from "./LoadButton";

describe("LoadButton component", () => {
    it("renders button correctly", () => {
        const mockOnClick = jest.fn();
        const { getByText } = render(<LoadButton onClick={mockOnClick} />);
        const buttonElement = getByText("Load more");
        expect(buttonElement).toBeInTheDocument();
    });

    it("triggers onClick when button is clicked", () => {
        const mockOnClick = jest.fn();
        const { getByText } = render(<LoadButton onClick={mockOnClick} />);
        const buttonElement = getByText("Load more");
        fireEvent.click(buttonElement);
        expect(mockOnClick).toHaveBeenCalled();
    });
});
