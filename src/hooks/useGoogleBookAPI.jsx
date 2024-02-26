import { useEffect, useState } from "react";

import GoogleBookAPI from "../components/API/GoogleBookAPI";

const useGoogleBookAPI = (search, category, sorting, startId) => {
    const [books, setBooks] = useState([]);
    const [initialTotalItems, setInitialTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const {
                books: fetchedBooks,
                initialTotalItems: fetchedTotalItems
            } = await GoogleBookAPI(search, category, sorting, startId);
            setBooks(fetchedBooks);
            setInitialTotalItems(fetchedTotalItems);
            setLoading(false);
        };

        fetchData();
    }, [search, category, sorting, startId]);

    return { books, initialTotalItems, loading };
};

export default useGoogleBookAPI;
