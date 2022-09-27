import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
    mode: 'dark',
    primary: {
      main: '#1E90FF',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
  },
	components: {
    // CTRL + SPACE to find the component you would like to override.
    // For most of them you will need to adjust just the root...
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: 'white',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
          // style the input border and background
          '& .MuiOutlinedInput-input': {
            '& fieldset': {
              border: 1,
            },
            '&:hover fieldset': {
              borderColor: 'white',
              borderWidth: '0.15rem',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        },
      },
    },
  },
});

export default theme;
