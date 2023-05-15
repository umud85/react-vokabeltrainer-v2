import Button from '@mui/material/Button';


interface MyButtonProps {
  label: string;
  handler: () => void;
}

export default function MyButton({label, handler}: MyButtonProps) {
  return (
    <Button
      variant='contained'
      sx={{ height: '100%' }}
      fullWidth
      onClick={handler}
    >
      {label.toUpperCase()}
    </Button>
  );


}