import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4D81B7",
            light: "#1871E8",
        },
        secondary: {
            main: "#7D7A7A",
        },
        text: {
            primary: "#0f172a",
            secondary: "#87898C",
        },
        background: {
            default: "#f8fafc",
        },
        border: {
            primary: "#C6C6C6",
            secondary: "#E0E0E0",
        },
        veritoneLight: {
            main: "#1871E8",
            contrastText: "#fff",
        },
        veritoneTextVariant: {
            primary: '#2A323C',
            secondary: '#5C6269'
        }
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
        veritoneNunito: {
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0px",
            textAlign: "center",
        },
        veritoneNunitoMedium: {
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0px",
            textAlign: "center",
        },
        veritoneNunitoSmall: {
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0px",
            textAlign: "center",
        },
        Nunito18pxSemiBold: {
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0px",
            textAlign: "center",
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    overflow: "hidden",
                    textTransform: "none",
                    padding: "8px 16px",
                    "& .MuiTouchRipple-root": {
                        borderRadius: 4,
                    },
                    "&::before": {
                        borderRadius: 4,
                    },
                    "&::after": {
                        borderRadius: 4,
                    },
                },
            },
        },
    },

});

export default theme;