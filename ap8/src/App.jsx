
import './App.css'
import Empleado from './Componentes/Empleado'
import Empleado1 from './Componentes/Empleado1'
import Empleado2 from './Componentes/Empleado2'
import Empleado3 from './Componentes/Empleado3'
import Empleado4 from './Componentes/Empleado4'
import Temporizador from './Componentes/Temporizador'

let empleados=[{
  nombre: 'Alberto',
  apellidos: 'Rodriguez Garcia',
  edad: 59
},
{
  nombre: 'Alberto1',
  apellidos: 'Rodriguez Garcia1',
  edad: 90
},
{
  nombre: 'Alberto2',
  apellidos: 'Rodriguez Garcia2',
  edad: 90
},

]


function App() {  
  return (
    <>
    <Empleado4  />
    <Temporizador />   
    </>
  )
}

export default App
