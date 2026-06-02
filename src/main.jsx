import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartCounter from './components/CartCounter.jsx';
import ListManager from './components/ListManager.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartCounter />
  <ListManager />
  </StrictMode>,
)
