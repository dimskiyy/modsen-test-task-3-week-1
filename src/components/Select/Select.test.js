import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Select from "./Select";

describe("Select component", () => {
    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
    ];

    const mockOnChange = jest.fn();

    it("renders select label correctly", () => {
        const label = "Select label";
        const { getByText } = render(
            <Select
                label={label}
                value=""
                options={options}
                onChange={mockOnChange}
                id="testSelect"
            />
        );
        expect(getByText(label)).toBeInTheDocument();
    });

    it("renders options correctly", () => {
        const { getByText } = render(
            <Select
                label="Select label"
                value=""
                options={options}
                onChange={mockOnChange}
                id="testSelect"
            />
        );
        options.forEach((option) => {
            expect(getByText(option.label)).toBeInTheDocument();
        });
    });
});
