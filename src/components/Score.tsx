import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Voc } from '../types/state';


export default function Score({ voc }: { voc: Voc[] }) {
  const theme = useTheme();
  function countVocs(count: number) {
    return voc.filter((el) => el.count === count).length;
  }

  return (
    <Box
      sx={{
        pt: 8,
        pb: 2,
        bgcolor: theme.palette.grey[200],
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Grid>
        <Typography>Start</Typography>
        <Typography>{countVocs(0)}</Typography>
      </Grid>
      <Grid>
        <Typography>Stufe 1</Typography>
        <Typography>{countVocs(1)}</Typography>
      </Grid>
      <Grid>
        <Typography>Stufe 2</Typography>
        <Typography>{countVocs(2)}</Typography>
      </Grid>
      <Grid>
        <Typography>Gelernt</Typography>
        <Typography>{countVocs(3)}</Typography>
      </Grid>
    </Box>
  );
}