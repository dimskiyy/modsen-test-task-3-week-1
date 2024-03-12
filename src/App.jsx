import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { RoutesConfig } from "constants/Routes";
import NotFound from "pages/404/NotFound";
import Book from "pages/book";
import Favorites from "pages/favorites";
import Home from "pages/home";
import { darkTheme } from "themes/darkTheme";
import { mainTheme } from "themes/mainTheme";

function App() {
    const [theme, setTheme] = useState(mainTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === mainTheme ? darkTheme : mainTheme
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <IconButton onClick={toggleTheme}>
                {theme === mainTheme ? (
                    <Brightness4Icon />
                ) : (
                    <Brightness7Icon />
                )}
            </IconButton>
            <Routes>
                <Route path={RoutesConfig.HOME} element={<Home />} />
                <Route path={RoutesConfig.BOOK} element={<Book />} />
                <Route path={RoutesConfig.FAVORITES} element={<Favorites />} />
                <Route path={RoutesConfig.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
