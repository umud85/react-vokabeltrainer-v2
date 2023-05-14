import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import deFlag from './img/DE.svg';
import gbFlag from './img/GB.svg';
import Avatar from '@mui/material/Avatar';
import Header from './components/Header';
import Score from './components/Score';
import DisplayBox from './components/DisplayBox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const vocs = [
  { id: 0, english: 'hello', german: 'hallo', count: 0 },
  { id: 1, english: 'car', german: 'Auto', count: 0 },
  { id: 2, english: 'dog', german: 'Hund', count: 0 },
  { id: 3, english: 'water', german: 'Wasser', count: 0 },
  { id: 4, english: 'coffee', german: 'Kaffee', count: 0 },
];

const theme = createTheme();

interface Voc { 
  id: number;
  english: string;
  german: string;
  count: number;
}

export default function App() {
  const [voc, setVoc] = useState<Voc[]>(vocs);
  return (
    <>
      <Container component='main' maxWidth='sm' sx={{ mt: 5 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Score />
          <Box>
            <DisplayBox>
              <Grid
                item xs={1}
                sx={{display: 'flex', justifyContent: 'center'}}
              >
              <Avatar
                src={deFlag}
                alt='German Flag'
              />
              </Grid>
              <Grid item xs={11}></Grid>   
            </DisplayBox>
            <DisplayBox>
              <Grid
                item
                xs={1}
                sx={{display: 'flex', justifyContent: 'center'}}
              >
              <Avatar
                src={gbFlag}
                alt='British Flag'
              />
              </Grid>
              <Grid item xs={11}></Grid>
            </DisplayBox>
            <Grid
              container
              alignItems='flex-end'
              sx={{display: 'flex'}}
            >
              <Grid
                item
                xs={10}
                sx={{mt: 2}}
              >
                <TextField
                  id="outlined-basic"
                  label="Your answer"
                  variant="outlined"
                  fullWidth
   
                />
              </Grid>
              <Grid
                item
                xs={2}
                alignSelf='stretch'
                sx={{mt: 2,}}
              >
                <Button
                  variant='contained'
                  sx={{ height: '100%' }}
                  fullWidth
                >
                  OK
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}