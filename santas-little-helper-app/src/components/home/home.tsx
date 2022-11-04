import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../images/logo';
import Title from '../images/title';
import Stack from '@mui/material/Stack';
import LittleMessage from '../little-message';

const SIGN_IN_STRING = "Sign In"
const SIGN_UP_STRING = "Sign Up"
const EVENT_CODE_STRING = "Enter with event code"

const theme = createTheme();

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/SBdmQcW8qag)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box>
                <Logo/>
            </Box>
            <Box sx={{ mt: 3, mb: 2 }}>
                <Title/>
            </Box>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A simple tool to organize holiday parties and secret santa's.
            </Typography>

            <Box  sx={{ mt: 1}}>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained">{SIGN_IN_STRING}</Button>
                    <Button variant="contained">{SIGN_UP_STRING}</Button>
                </Stack>

                <Button variant="contained" sx={{ mt: 3, mb: 2 }}>{EVENT_CODE_STRING}</Button>

              <LittleMessage sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}