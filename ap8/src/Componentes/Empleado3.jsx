import React from 'react'
import { useState, useEffect } from 'react'
import Temporizador from './Temporizador';

function Empleado3() {

  //Definir la variable de estado Empleado
  const [empleado, setempleado] = useState({
    nombre: 'Alberto',
    apellidos: 'Rodriguez',
    edad: 59,
    tipo: ""

  });

  //Indicar lo siguiente según cambie la edad
  /*
     0-14 --tipo="niño" 
     14-19-  tipo=adolescente
     20-35-  joven
     36

  */
  useEffect(() => {

    //Cambiar el tipo
    if (empleado.edad < 19) setempleado({ ...empleado, ["tipo"]: "niño" })
    else if (empleado.edad < 50) setempleado({ ...empleado, ["tipo"]: "adulto" })
    else setempleado({ ...empleado, ["tipo"]: "anciano" })

    //Poner el nombre en mayúsculas
    setempleado({...empleado,["nombre"]:empleado.nombre.toUpperCase()})

  }, [empleado.edad, empleado.nombre]);




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
        <input type="text" value={empleado.nombre} name="nombre" onChange={controlar} />
        <br></br>
        <label>Apellidos</label>
        <input type="text" value={empleado.apellidos} name="apellidos" onChange={controlar} />
        <br></br>
        <label>Edad</label>
        <input type="text" value={empleado.edad} name="edad" onChange={controlar} />
        <br></br>
        <p>Tipo: {empleado.tipo} </p>
        <input type="submit" value="Guardar" />
      </form>
    </>
  )
}

export default Empleado3