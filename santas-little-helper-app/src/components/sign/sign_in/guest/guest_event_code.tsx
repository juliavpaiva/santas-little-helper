import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../../images/logo';

const EMAIL_STRING = "Email Adress"
const SIGN_IN_STRING = "Sign in as guest"
const EVENT_CODE_STRING = "Event Code"

const theme = createTheme();

export default function GuestEventCode() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      eventCode: data.get('eventCode'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Box
        sx={{ mt: 3, mb: 2 }}>
            <Logo/>
        </Box>
          <Typography component="h1" variant="h5">
            {SIGN_IN_STRING}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={EMAIL_STRING}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="eventCode"
              label={EVENT_CODE_STRING}
              name="eventCode"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {SIGN_IN_STRING}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}