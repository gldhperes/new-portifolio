import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme.js'
import App from './app/App.jsx'
import { DeviceProvider } from './app/DeviceContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <DeviceProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </DeviceProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
