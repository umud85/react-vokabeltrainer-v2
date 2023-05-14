import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Score() {
  const theme = useTheme();
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
      <Typography>Start</Typography>
      <Typography>Stufe 1</Typography>
      <Typography>Stufe 2</Typography>
      <Typography>Gelernt</Typography>
    </Box>
  );
}