import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

interface DisplayBoxProps { 
  children: React.ReactNode | React.ReactNode[] | null;
}

export default function DisplayBox({ children } : DisplayBoxProps) {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={0}
      alignItems='center'
      justifyContent='center'
      sx={{
        mt: 2,
        p: 1,
        height: '58px', // magic number
        border: '1px solid',
      }}
    >
      {children}
    </Grid>
  );
}