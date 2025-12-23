import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
// I am removing StrictMode to avoid double rendering during development and storing the same value in the localStorage twice
    <App />

)
