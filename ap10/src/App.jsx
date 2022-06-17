import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RutaPrincipal from './Rutas/RutaPrincipal'

function App() {
  

  return (
    <BrowserRouter>
      <RutaPrincipal />
    </BrowserRouter>
  )
}

export default App
