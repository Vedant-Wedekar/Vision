import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import PlayerContextProvider from './context/PlayerContext'; // ✅ default import (no {})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <PlayerContextProvider>   {/* ✅ wrap with default export */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PlayerContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
