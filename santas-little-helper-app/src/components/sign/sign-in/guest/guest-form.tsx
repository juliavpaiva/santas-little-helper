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
import Logo from '../../../images/logo';
import LittleMessage from '../../../little-message';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const FORM_STRING = "Form"
const HELLO_STRING = "Hello"
const NAME_STRING = "Sonia"
const GUST_FORM_TEXT_STRING = "Fill inforation for the secret santa bellow"
const SECRET_SANTA_THEME_STRING = "The Secret Santa theme is:"

const FAVORITE_COLOR = "Favorite Color"
const TSHIRT_SIZE_STRING = "T-shirt Size"
const SHOE_SIZE_STRING = "Shoe Size"
const BOOK_GENRE = "Book Genre"
const PREFERENCES_TEXT_AREA_STRING = "Likes and Dislikes"
const PREFERENCES_TEXT_AREA_INFO_STRING = "Write here your preferences"
const SAVE_INFORMATION = "Save Information"

const theme = createTheme();

export default function GuestForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userName: data.get('userName'),
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
            {HELLO_STRING}, {NAME_STRING}!
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 3, mb: 2 }}>
            {SECRET_SANTA_THEME_STRING}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Chinelo"/>
            <Chip label="Livro" />
            <Chip label="Caneca" />
          </Stack>
          <Typography variant="body2" gutterBottom sx={{ mt: 3, mb: 2 }}>
            {GUST_FORM_TEXT_STRING}
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={FAVORITE_COLOR}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="tshirtSize"
                  required
                  fullWidth
                  id="tshirtSize"
                  label={TSHIRT_SIZE_STRING}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="shoeSize"
                  required
                  fullWidth
                  id="shoeSize"
                  label={SHOE_SIZE_STRING}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="bookGenre"
                  label={BOOK_GENRE}
                  name="bookGenre"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="preferencesTextArea"
                  label={PREFERENCES_TEXT_AREA_STRING}
                  id="preferencesTextArea"
                  placeholder={PREFERENCES_TEXT_AREA_INFO_STRING}
                  multiline
                  rows={3}
                  maxRows={6}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {SAVE_INFORMATION}
            </Button>
          </Box>
        </Box>
        
        <LittleMessage sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}