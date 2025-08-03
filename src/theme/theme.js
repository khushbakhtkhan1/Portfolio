import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Inter, Roboto, Montserrat, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h5: { fontWeight: 500 },
  },
  shape: { borderRadius: 12 },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#703AC0' },
    secondary: { main: '#2C0354' },
    background: { default: '#F4F6FB', paper: '#fff' },
    text: { primary: '#232323', secondary: '#703AC0' },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#703AC0' },
    secondary: { main: '#D5BCFA' },
    background: { default: '#1A1A1A', paper: '#232323' },
    text: { primary: '#D5BCFA', secondary: '#703AC0' },
  },
  ...commonSettings,
});
