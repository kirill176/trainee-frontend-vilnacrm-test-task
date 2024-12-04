import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: 20,
          borderColor: '#1565c0',

          '& .MuiInputBase-root': {
            borderRadius: 8,
            padding: '5px',
            color: 'white',
          },
          '& .MuiFormLabel-root': {
            fontSize: '1rem',
            color: '#1565c0',
          },
          '& .MuiOutlinedInput-root': {
            borderColor: '#1976d2',
            '&:hover fieldset': {
              borderColor: '#1565c0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0d47a1',
            },
          },
        },
      },
    },
  },
});

export default theme;
