import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>
);
