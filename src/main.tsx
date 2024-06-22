import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PresupuestoProveedor } from './context/PresupuestoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <PresupuestoProveedor>
        <App />
    </PresupuestoProveedor>
  </React.StrictMode>,
)
