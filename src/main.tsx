import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Container } from 'react-bootstrap'

createRoot(document.getElementById('root')!).render(
  <Container fluid className='mainWrapper'>
    <App />
  </Container>,
)
