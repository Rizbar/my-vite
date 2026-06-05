import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PR28_3 from './PR28_3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PR28_3 />
  </StrictMode>,
)
