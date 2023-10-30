import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#F6F6F6',
  },
   radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
   spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
);
