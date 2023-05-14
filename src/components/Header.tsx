import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Header() {
  const theme = useTheme();
  return (
    <>
      <Box
        component='header'
        sx={{ p: 1, bgcolor: 'primary.main', color: theme.palette.grey['A200'] }}>
        <Typography
          component='h1'
          variant='h4'
          align='center'
        >
          Umut's Vokabeltrainer
        </Typography>
      </Box>
    </>
  );
}