import { Box, Typography } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Logo from "../../images/logo";

const EVENT_NAME = "Event Name"
const EVENT_DATE = "24/12/2022"
const EVENT_PLACE = "Casa da Tia"

const theme = createTheme();
export default function EventDetails() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                mt: 8,
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <Logo/>
            </Box>
            <Box
            sx={{
                marginRight: 20,
                marginLeft: 20,
                display: 'flex',
                flexDirection: 'column',
              }}>
                                    
                <Box>
                <Typography variant="h4" gutterBottom>
                    {EVENT_NAME}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {EVENT_DATE}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {EVENT_PLACE}
                </Typography>
                </Box>
            </Box>   
        </ThemeProvider>

    )
}