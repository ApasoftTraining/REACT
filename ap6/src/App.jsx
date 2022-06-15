import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Evento from './Componentes/Evento'
import Contador from './Componentes/Contador'
import Contador1 from './Componentes/Contador1'
import Salario from './Componentes/Salario'

function App() {  
  return (
      //<Contador1 contador={100}  caja="valor inicial" />     
      <Salario salario={1000}  irpf={15}/>
  )
}

export default App
