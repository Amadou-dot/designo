import MuiButton from '@mui/material/Button';

type ButtonProps = {
  children: React.ReactNode;
};
export default function Button({ children }: ButtonProps) {
  return (
    <MuiButton
      className='text-2xl'
      variant='contained'
      disableElevation
      size='large'
      sx={{
        color: 'var(--dark-gray)',
        backgroundColor: 'var(--light-gray)',
        padding: '14px 24px',
        borderRadius: '8px',
        transition: 'color 0.5s',
        ':hover': {
          bgcolor: 'var(--primary-light)',
          color: 'var(--light-gray)',
        },
      }}
    >
      {children}
    </MuiButton>
  );
}
