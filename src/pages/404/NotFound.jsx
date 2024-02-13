import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

const NotFound = () => {
    useEffect(() => {
        document.title = "Page not found";
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "64px",
                minHeight: "100vh",
                backgroundColor: "FFFFFF",
            }}
        >
            <Typography variant="h1" fontSize="128px" textAlign="center">
                404
            </Typography>
            <Typography variant="h1" textAlign="center" maxWidth="md">
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" size="large" href="/">
                Back Home
            </Button>
        </Box>
    );
};
export default NotFound;
