import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import BookDetail from "./BookDetail";

jest.mock("axios");

const mockedBookData = {
    volumeInfo: {
        title: "CHAINSAW MAN tom 10",
        authors: ["Tatsuki FUJIMOTO"],
        categories: ["Manga"],
        description: "Mocked description",
        imageLinks: {
            thumbnail: "mocked-image-url.jpg"
        }
    }
};

describe("BookDetail component", () => {
    it("renders book details correctly when data is fetched successfully", async () => {
        axios.get.mockResolvedValueOnce({ data: mockedBookData });

        const { getByText, getByAltText } = render(<BookDetail />);

        await waitFor(() => {
            expect(getByText("CHAINSAW MAN tom 10")).toBeInTheDocument();
            expect(getByText("Manga")).toBeInTheDocument();
            expect(getByText("Tatsuki FUJIMOTO")).toBeInTheDocument();
            expect(getByText("Mocked description")).toBeInTheDocument();
            expect(getByAltText("#")).toHaveAttribute(
                "src",
                "mocked-image-url.jpg"
            );
        });
    });

    it("renders error message when data fetching fails", async () => {
        axios.get.mockRejectedValueOnce(new Error("Failed to fetch"));

        const { getByText } = render(<BookDetail />);

        await waitFor(() => {
            expect(
                getByText("Error: Error fetching book data.")
            ).toBeInTheDocument();
        });
    });
});
