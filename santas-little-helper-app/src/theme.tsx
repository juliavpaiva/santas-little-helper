import { createTheme } from "@mui/material/styles";

export const SantasLittleHelperTheme = createTheme({
  palette: {
    background: {
      paper: "#f9f5f5"
    },
    primary: {
      main: "#7c011a",
    }
  },
  typography: {
    fontFamily: [
      'Trispace',
      'sans-serif'
    ].join(','),
  },
});

export const ButtonStyle = { 
  borderRadius: 50,
 };