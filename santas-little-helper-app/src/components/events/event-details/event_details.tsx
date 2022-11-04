import { Avatar, Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
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
            <Box
            sx={{ 
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 3,
                mb: 2 }}>
            <Logo/>
          </Box>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {EVENT_NAME}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  {EVENT_DATE}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              {EVENT_PLACE}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ my: 3, mx: 2 }}>
            <Stack direction="row" spacing={2}>
                <Avatar>S</Avatar>
                <Avatar>P</Avatar>
                <Avatar>W</Avatar>
                <Avatar>T</Avatar>
            </Stack>
          </Box>
        </Box>
        </ThemeProvider>
      );
}