import React from "react";
import { Route, Routes } from "react-router-dom";

import { RoutesConfig } from "./Constants/Routes";
import NotFound from "./pages/404/NotFound";
import Book from "./pages/book";
import Home from "./pages/home";

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
