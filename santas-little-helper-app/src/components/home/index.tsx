import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { ButtonStyle, SantasLittleHelperTheme } from "../../theme";
import { LITTLE_SANTAS_DEFINITION_STRING, SIGN_IN_EVENT_CODE_STRING, SIGN_IN_STRING, SIGN_UP_STRING } from "../i18n/strings";
import Logo from "../images/logo";
import Title from "../images/title";
import LittleMessage from "../little-message";
import HomeImage from "./home_image";

const COMPONENTS_SPACE = { mt: 3, mb: 2 }

export default function Home() {
    const { t } = useTranslation()

    return (
        <ThemeProvider theme={SantasLittleHelperTheme}>
        <CssBaseline />

        <Grid container component="main" sx={{ height: '100vh' }}>
            <HomeImage/>

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Logo />
                    <Box sx={COMPONENTS_SPACE}> <Title/> </Box>
                    
                    <Typography variant="body1" justifyContent="center" gutterBottom sx={{...COMPONENTS_SPACE, textAlign: 'center' }}>
                        {t(LITTLE_SANTAS_DEFINITION_STRING)}
                    </Typography>

                    <Stack spacing={2} direction="row" justifyContent="center" sx={COMPONENTS_SPACE}>
                        <Button variant="contained" style={ButtonStyle}>{t(SIGN_IN_STRING)}</Button>
                        <Button variant="contained" style={ButtonStyle}>{t(SIGN_UP_STRING)}</Button>
                    </Stack>
                    <Stack spacing={2} direction="row" justifyContent="center">
                        <Button variant="contained" style={ButtonStyle}>{t(SIGN_IN_EVENT_CODE_STRING)}</Button>
                    </Stack>
                </Box> 
                
                <LittleMessage />               
            </Grid>
        </Grid>
      </ThemeProvider>
    )
}