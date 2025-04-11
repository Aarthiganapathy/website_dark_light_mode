import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Index } from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Famous from './components/Famous';
import Place from './components/Place';
import { useTheme } from './context/ThemeContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const { theme } = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === 'dark' ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: theme === 'dark' ? '#f48fb1' : '#d81b60',
      },
      background: {
        default: theme === 'dark' ? '#121212' : '#f5f5f5',
        paper: theme === 'dark' ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={`app-wrapper ${theme}`}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/famous" element={<Famous />} />
          <Route path="/place" element={<Place />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;