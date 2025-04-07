import {createTheme} from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#19b0d2',
            light: '#42a5f5',
            dark: '#075ebe',
        },
        secondary: {
            main: '#be1bbb'
        },
        text: {
          main: "#000000"
        },
        background:
            {
                paper: "#f19e9e"
            }
    }
});