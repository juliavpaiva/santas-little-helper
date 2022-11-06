import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../images/logo';
import LittleMessage from '../../little-message';
import { ButtonStyle, SantasLittleHelperTheme } from '../../../theme';
import { EMAIL_STRING, FORGOT_PASSWORD_STRING, PASSWORD_STRING, SIGN_IN_STRING, SIGN_UP_STRING } from '../../i18n/strings';
import { useTranslation } from 'react-i18next';
import Title from '../../images/title';

export default function SignIn() {
  const { t } = useTranslation()
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={SantasLittleHelperTheme}>
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
        <Box>
            <Logo />
        </Box>
        <Box sx={{ mt: 3, mb: 2 }}> <Title/> </Box>
          <Typography component="h1" variant="h5">
            {t(SIGN_IN_STRING)}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t(EMAIL_STRING)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t(PASSWORD_STRING)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={ButtonStyle}
            >
              {t(SIGN_IN_STRING)}
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={ButtonStyle}
            >
              {t(SIGN_UP_STRING)}
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              style={ButtonStyle}
            >
              {t(FORGOT_PASSWORD_STRING)}
            </Button>

          </Box>
        </Box>
        <LittleMessage sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}