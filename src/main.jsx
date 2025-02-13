// main.jsx
// Name: KUNTAL OJHA
// Date: 13-02-2025

// Node modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// CSS Links
import './index.css';
import 'lenis/dist/lenis.css';

// Component
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
