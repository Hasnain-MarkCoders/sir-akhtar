// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/Store.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F1E17',
    },
    secondary: {
      main: '#878680',
    },
    success: {
      main: '#4BAF47',
    },
    warning: {
      main: '#EEC044',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F7F0',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
