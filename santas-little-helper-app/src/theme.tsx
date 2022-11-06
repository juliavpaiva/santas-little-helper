import { createTheme } from "@mui/material/styles";

export const SantasLittleHelperTheme = createTheme({
  palette: {
    background: {
      paper: "#f9f5f5"
    },
  },
  typography: {
    fontFamily: [
      'Trispace',
      'sans-serif'
    ].join(','),
  }
});

export const ButtonStyle = { 
  borderRadius: 50,
  backgroundColor: "#7c011a"
 };