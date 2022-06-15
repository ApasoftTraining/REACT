import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Evento from './Componentes/Evento'
import Contador from './Componentes/Contador'
import Contador1 from './Componentes/Contador1'

function App() {  
  return (
      <Contador1 contador={100} />     
  )
}

export default App
