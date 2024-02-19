import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";
import NotFound from "./pages/404/NotFound";
import { RoutesConfig } from "./Constants/Routes";

function App() {
    return (
        <>
            <Routes>
                <Route path={RoutesConfig.HOME} element={<Home />} />
                <Route path={RoutesConfig.BOOK} element={<Book />} />
                <Route path={RoutesConfig.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
