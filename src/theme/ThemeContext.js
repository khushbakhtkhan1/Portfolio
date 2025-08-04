import React, { createContext, useMemo, useState, useContext, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

export const CustomThemeProvider = ({ children }) => {
  // Default to light theme
  const [mode, setMode] = useState('light');
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      // Save preference to localStorage
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  // Initialize theme from localStorage or use default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setMode(savedTheme);
    }
  }, []);

  // Create theme based on current mode
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
