import axios from "axios";
import { useEffect, useState } from "react";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "AIzaSyCIxIIcpTwWrV5HmCj_q4AWZRAqD7y6CFI";

const useGoogleBookApi = (search, category, sorting, startId) => {
    const [books, setBooks] = useState([]);
    const [initialTotalItems, setInitialTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30&orderBy=${sorting}&startIndex=${startId}`
            )
            .then((res) => {
                let filteredBooks = res.data.items;

                if (category !== "all") {
                    filteredBooks = filteredBooks.filter(
                        (book) =>
                            book.volumeInfo.categories &&
                            book.volumeInfo.categories
                                .map((cat) => cat.toLowerCase())
                                .includes(category.toLowerCase())
                    );

                    if (startId === 0) {
                        setInitialTotalItems(filteredBooks.length);
                    }
                } else {
                    if (startId === 0) {
                        setInitialTotalItems(res.data.totalItems);
                    }
                }

                setBooks(filteredBooks);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [search, category, sorting, startId]);

    return { books, initialTotalItems, loading };
};

export default useGoogleBookApi;
