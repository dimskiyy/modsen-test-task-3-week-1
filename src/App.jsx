import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RoutesConfig } from "constants/Routes";
import NotFound from "pages/404/NotFound";
import Book from "pages/book";
import Home from "pages/home";
import { mainTheme } from "themes/mainTheme";

function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <Routes>
                <Route path={RoutesConfig.HOME} element={<Home />} />
                <Route path={RoutesConfig.BOOK} element={<Book />} />
                <Route path={RoutesConfig.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
