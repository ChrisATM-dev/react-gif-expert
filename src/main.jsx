import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GifEExpertApp from './GifEExpertApp';

import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifEExpertApp />
  </StrictMode>,
)
