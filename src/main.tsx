import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PresupuestoProveedor } from './context/PresupuestoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
{/* Aqui se tiene que rodear el Presupuesto sobre app para que se pueda importar bien el context */}
    <PresupuestoProveedor>
        <App />
    </PresupuestoProveedor>
  </React.StrictMode>,
)
