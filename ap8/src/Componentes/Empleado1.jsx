import React from 'react'
import { useState } from 'react'
import Temporizador from './Temporizador';

function Empleado1() {

  //Definir la variable de estado Empleado
  const [empleado, setempleado] = useState({
    nombre: 'Alberto',
    apellidos: 'Rodriguez Garcia',
    edad: 59
  });

  //Evolucion de Empleado uando una sola funcion
  
  function controlar(e) {
    setempleado({ ...empleado, [e.target.name]: e.target.value })
  }

  function grabar(evento) {
    evento.preventDefault();
    console.log(evento.target.name);
    console.log(empleado);
  }

  return (
    <>
    <form name="form1" onSubmit={grabar}>
      <label>Nombre</label>
      <input type="text" value={empleado.nombre} name="nombre" onChange={controlar}/>
      <br></br>
      <label>Apellidos</label>
      <input type="text" value={empleado.apellidos} name="apellidos" onChange={controlar}/>
      <br></br>
      <label>Edad</label>
      <input type="text" value={empleado.edad} name="edad" onChange={controlar} />
      <br></br>
      <input type="submit" value="Guardar" />
    </form>
    </>
  )
}

export default Empleado1