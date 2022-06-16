import React from 'react'
import { useState, useEffect } from 'react'
import Temporizador from './Temporizador';

function Empleado4() {

  //Definir la variable de estado Empleado
  const [empleado, setempleado] = useState({});

  const [empleados, setempleados]= useState([]);

  //Ejecutar solo al principio
  useEffect(() => {

  
  }, []);




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
       <h2> LISTA DE EMPLEADOS</h2>
       <ul>
            <li>Empleado1</li>
            <li>Empleado2</li>
            <li>Empleado3</li>
            <li>Empleado4</li>

       </ul>
       <h2>Añadir empleado</h2>
      <form name="form1" onSubmit={grabar}>
        <label>Nombre</label>
        <input type="text" value={empleado.nombre} name="nombre" onChange={controlar} />
        <br></br>
        <label>Apellidos</label>
        <input type="text" value={empleado.apellidos} name="apellidos" onChange={controlar} />
        <br></br>
        <label>Edad</label>
        <input type="text" value={empleado.edad} name="edad" onChange={controlar} />
        <br></br>
        <p>Tipo: {empleado.tipo} </p>
        <input type="submit" value="Añadir empleado" />
      </form>
    </>
  )
}

export default Empleado4