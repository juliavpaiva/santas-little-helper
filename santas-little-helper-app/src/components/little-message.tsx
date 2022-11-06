import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import { SantasLittleHelperTheme } from "../theme";

export default function LittleMessage(props: any) {
    return (
      <ThemeProvider theme={SantasLittleHelperTheme}>
        <footer>
          <Box sx={{mt: 3, mb: 1}}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
              <Link color="inherit" href="https://github.com/juliavpaiva/santas-little-helper">
                Creaded by Julia Paiva
              </Link>
            </Typography>
          </Box>
        </footer>
      </ThemeProvider>
    );
  }