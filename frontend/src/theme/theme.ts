import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4D81B7",
            light: "#1871E8",
        },
        secondary: {
            main: "#1565c0",
        },
        text: {
            primary: "#0f172a",
            secondary: "#475569",
        },
        background: {
            default: "#f8fafc",
        },
    },

    typography: {
        fontFamily: `"Dosis", sans-serif`,
        veritoneLarge: {
            fontFamily: "Dosis",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0.25px",
            textTransform: "uppercase",
        },
    },

});

export default theme;