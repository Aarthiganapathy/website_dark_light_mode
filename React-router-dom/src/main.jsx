import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
</React.StrictMode>

);