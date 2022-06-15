import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Evento from './Componentes/Evento'
import Contador from './Componentes/Contador'
import Contador1 from './Componentes/Contador1'
import Salario from './Componentes/Salario'
import Contador2 from './Componentes/Contador2'

function App() {  
  return (
      //<Contador1 contador={100}  caja="valor inicial" />     
      //<Salario salario={1000}  irpf={15}/>
      <Contador2 contador={100}  caja="valor inicial"/>
  )
}

export default App
