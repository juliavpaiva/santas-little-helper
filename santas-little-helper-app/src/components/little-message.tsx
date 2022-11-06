import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import { SantasLittleHelperTheme } from "../theme";

export default function LittleMessage(props: any) {
    return (
      <ThemeProvider theme={SantasLittleHelperTheme}>
        <footer>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ position: 'sticky'}} {...props}>
            <Link color="inherit" href="https://github.com/juliavpaiva/santas-little-helper">
              Creaded by Julia Paiva
            </Link>
          </Typography>
        </footer>
      </ThemeProvider>
    );
  }