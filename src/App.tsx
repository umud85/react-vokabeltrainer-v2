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
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Voc, Language } from './types/state';

const vocs = [
  { id: 0, english: 'hello', german: 'hallo', count: 0 },
  { id: 1, english: 'car', german: 'Auto', count: 0 },
  { id: 2, english: 'dog', german: 'Hund', count: 0 },
  { id: 3, english: 'water', german: 'Wasser', count: 0 },
  { id: 4, english: 'coffee', german: 'Kaffee', count: 0 },
];

const theme = createTheme();

export default function App() {
  const [voc, setVoc] = useState<Voc[]>(vocs);
  const [currentVoc, setCurrentVoc] = useState<Voc>(voc[0]);
  const [answer, setAnswer] = useState<string>('');
  const [language, setLanguage] = useState<Language>('english');
  const [solution, setSolution] = useState<boolean>(false);

  function handleSolutionClick() {
    console.log('blahh')
  }

  function checkResult() {
    const result = currentVoc[language].toLowerCase() === answer.toLowerCase();
    return result;
  }

  function handleClick() {
    const result = checkResult();
      const newVocs = [...voc].map((el) => (
        el.id !== currentVoc.id ? el :
          // if correct answer add one to count, else
          result === true ? { ...el, count: el.count + 1 } : {...el, count: 0}
      ));
    setVoc(newVocs);
    setSolution(!solution);
  }

  function handleNextClick() {
    console.log('next')
  }

  return (
    <>
      <Container component='main' maxWidth='sm' sx={{ mt: 5 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Score voc={voc} />
          <Box>
            <DisplayBox>
              <Grid
                item
                xs={1}
                sx={{display: 'flex', justifyContent: 'center'}}
              >
              <Avatar
                src={language === 'english' ? deFlag : gbFlag}
                alt='Flag'
                />
              </Grid>
              <Grid item xs={11}>
                <Typography
                  align='center'
                  variant='body1'
                >
                  {language === 'english' ? currentVoc.german : currentVoc.english}
                </Typography> 
              </Grid>   
            </DisplayBox>
            <DisplayBox>
              <Grid
                item
                xs={1}
                sx={{display: 'flex', justifyContent: 'center'}}
              >
              <Avatar
                src={language === 'english' ? gbFlag : deFlag}
                alt='Flag'
              />
              </Grid>
              <Grid item xs={11}>
                <Typography
                  align='center'
                  variant='subtitle1'
                  onClick={handleSolutionClick}
                >
                  {solution === false ? 'Für die Lösung hier klicken' :
                  currentVoc[language] }
                </Typography> 
              </Grid>
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
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={2}
                alignSelf='stretch'
                sx={{mt: 2,}}
              >
                {!solution && <Button
                  variant='contained'
                  sx={{ height: '100%' }}
                  fullWidth
                  onClick={handleClick}
                >
                  OK
                </Button>}
                {solution && <Button
                  variant='contained'
                  sx={{ height: '100%' }}
                  fullWidth
                  onClick={handleNextClick}
                >
                  NEXT
                </Button>}
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}