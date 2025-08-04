import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CustomThemeProvider, useThemeMode } from "./theme/ThemeContext";
import "./App.css";
import Home from "./components/";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ChatBot from "./components/ChatBot";

// Wrapper component to provide theme to the app
const ThemedApp = () => {
  const { mode } = useThemeMode();
  
  // Apply dark/light class to HTML element for Tailwind dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (mode === 'dark') {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${mode === 'dark' ? 'dark bg-gray-900' : 'bg-white'}`}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>
      <ChatBot />
    </div>
  );
};

// Separate routes component to use useLocation hook
const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

// Main App component with ThemeProvider
const App = () => (
  <CustomThemeProvider>
    <ThemedApp />
  </CustomThemeProvider>
);

export default App;
