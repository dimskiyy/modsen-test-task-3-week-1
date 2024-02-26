import React from "react";
import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import SearchForm from "./SearchForm";

describe("SearchForm component", () => {
    it("renders input correctly", () => {
        const setSearch = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchForm setSearch={setSearch} />
        );
        const inputElement = getByPlaceholderText("Book name");
        expect(inputElement).toBeInTheDocument();
    });

    it("updates query state when input value changes", () => {
        const setSearch = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchForm setSearch={setSearch} />
        );
        const inputElement = getByPlaceholderText("Book name");
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement.value).toBe("test");
    });

    it("calls setSearch prop when form is submitted", () => {
        const setSearch = jest.fn();
        const { getByText } = render(<SearchForm setSearch={setSearch} />);
        const submitButton = getByText("Submit");
        fireEvent.click(submitButton);
        expect(setSearch).toHaveBeenCalled();
    });
});
