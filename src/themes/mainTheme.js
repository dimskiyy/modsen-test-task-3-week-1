import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
    typography: {
        fontFamily: "Quicksand, Arial",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemibold: 600,
        fontWeightBold: 700,
        fontSize: "1.6rem",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2
        },
        h2: {
            fontSize: "2.2rem",
            fontWeight: 600
        },
        h3: {
            fontSize: "1.8rem",
            fontWeight: 600
        },
        h4: {
            fontSize: "1.6rem",
            fontWeight: 600
        },
        h5: {
            fontSize: "1.4rem",
            fontWeight: 500
        },
        h6: {
            fontSize: "1.2rem",
            fontWeight: 500
        },
        subtitle1: {
            fontSize: "1.2rem",
            fontWeight: 500
        },
        subtitle2: {
            fontSize: "1rem",
            fontWeight: 500
        },
        button: {
            fontSize: "1.4rem",
            fontWeight: 500
        },
        caption: {
            fontSize: "1rem",
            fontWeight: 400
        },
        overline: {
            fontSize: "0.8rem",
            fontWeight: 400
        }
    },
    spacing: 8
});
