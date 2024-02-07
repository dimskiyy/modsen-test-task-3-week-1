import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'book/:id'} element={<Book />} />
            </Routes>
        </>
    );
}

export default App;
