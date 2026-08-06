import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// This tells React to "hydrate" the static HTML created by react-snap
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  const root = createRoot(rootElement);
  root.render(app);
}

reportWebVitals();