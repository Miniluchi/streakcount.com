// scFront/src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'; // ou './main.css' selon ton nom


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
