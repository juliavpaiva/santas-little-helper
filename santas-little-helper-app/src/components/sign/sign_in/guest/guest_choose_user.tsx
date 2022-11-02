import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../../images/logo';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';

const CHOOSE_USER = "Choose User"
const CHOOSE_USER_TEXT = "Select bellow which user you want to sign in as."
const USER_NAME = "User Name"

const theme = createTheme();

export default function GuestChooseUser() {
  const [userName, setUserName] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userName: data.get('userName'),
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setUserName(event.target.value as string);
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
            {CHOOSE_USER}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 3, mb: 2 }}>
            {CHOOSE_USER_TEXT}
          </Typography>
          
          <FormControl fullWidth>
            <InputLabel id="user-name-select-label">{USER_NAME}</InputLabel>
            <Select
                labelId="user-name-select-label"
                id="user-name-select"
                value={userName}
                label={USER_NAME}
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {CHOOSE_USER}
            </Button>
          </Box>
          </FormControl>
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}