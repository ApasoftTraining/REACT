import React from 'react'
import {useState} from 'react'

function Empleado() {
  
  //Definir la variable de estado Empleado
  const [empleado, setempleado] = useState({
    nombre: 'Alberto',
    apellidos: 'Rodriguez Garcia',
    edad: 59
  });

  return (
    <form onSubmit={grabar}>
       <label>Nombre</label>
       <input type="text" value={empleado.nombre} name="nombre"/>
       <br></br>
       <label>Apellidos</label>
       <input type="text" value={empleado.apellidos} name="apellidos"/>
       <br></br>
       <label>Edad</label>
       <input type="text" value={empleado.edad} name="edad" />
       <br></br>

      <input type="submit" value="Guardar" />

    </form>
  )
}

export default Empleado