import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";
import NotFound from "./pages/404/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'book/:id'} element={<Book />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
