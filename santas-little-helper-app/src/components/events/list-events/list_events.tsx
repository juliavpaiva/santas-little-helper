import { Box } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Logo from "../../images/logo";
import EventCard from "./event-card";

const theme = createTheme();
export default function ListEvents() {
    return (
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                
                <Box sx={{ mt: 3, mb: 2 }}>
                    <Logo/>
                </Box>
                <EventCard/>
            </Box>   
        </ThemeProvider>

    )
}