import React from 'react'
import { useState } from 'react'
import AddPropiedad from './AddPropiedad';

function Empleado() {

  //Definir la variable de estado Empleado
  const [empleado, setempleado] = useState({
    nombre: 'Alberto',
    apellidos: 'Rodriguez Garcia',
    edad: 59
  });

  function controlar_nombre(evento) {
    setempleado({...empleado,["nombre"]: evento.target.value })
  }
  function controlar_apellidos(e) {
    setempleado({ ...empleado, ["apellidos"]: e.target.value })
  }
  function controlar_edad(e) {
    setempleado({ ...empleado, ["edad"]: e.target.value })
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
      <input type="text" value={empleado.nombre} name="nombre" onChange={controlar_nombre}/>
      <br></br>
      <label>Apellidos</label>
      <input type="text" value={empleado.apellidos} name="apellidos" onChange={controlar_apellidos}/>
      <br></br>
      <label>Edad</label>
      <input type="text" value={empleado.edad} name="edad" onChange={controlar_edad} />
      <br></br>

      <input type="submit" value="Guardar" />

    </form>
    
    </>
  )
}

export default Empleado