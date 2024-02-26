import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const GoogleBookAPI = async (search, category, sorting, startId) => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30&orderBy=${sorting}&startIndex=${startId}`
        );

        let filteredBooks = response.data.items;
        let totalItems = 0;

        if (category !== "all") {
            filteredBooks = filteredBooks.filter(
                (book) =>
                    book.volumeInfo.categories &&
                    book.volumeInfo.categories
                        .map((cat) => cat.toLowerCase())
                        .includes(category.toLowerCase())
            );

            totalItems = filteredBooks.length;
        } else {
            totalItems = response.data.totalItems;
        }

        return { books: filteredBooks, initialTotalItems: totalItems };
    } catch (error) {
        console.error("Error fetching books:", error);
        return { books: [], initialTotalItems: 0 };
    }
};

export default GoogleBookAPI;
