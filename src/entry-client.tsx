import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';

const rootElement = document.getElementById('root')!;

if (import.meta.env.DEV) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
}
