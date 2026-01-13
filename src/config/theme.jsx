import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeMain = createTheme({
    typography: {
        fontFamily: 'Montserrat',
        h1: {
            color: "#BC955B"
        }
    },
    palette: {
        primary: {
            main: "#691B32"
        },
        secondary: {
            main: "#BC955B"
        },
        text: {
            main: "#fff"
        }

    },
    gradients: {
        primary: "linear-gradient(to right, #5B132E, #C12862)",
        vertical: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #5b132d9e 50%, rgba(0, 0, 0, 0) 100%)"
    },

});

const Theme = ({ children }) => {

    return (
        <ThemeProvider theme={ThemeMain}>
            {children}
        </ThemeProvider>
    );
}
export default Theme;