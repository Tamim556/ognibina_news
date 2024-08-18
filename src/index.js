import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import AppRouter from './AppRouter'; // Assuming this is where your routes are defined

ReactDOM.render(
  <HelmetProvider> {/* Wrap your app with HelmetProvider */}
    <Router>
      <AppRouter />
    </Router>
  </HelmetProvider>,
  document.getElementById('root')
);
