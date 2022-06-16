import React from 'react'
import { useState, useEffect } from 'react'
import Temporizador from './Temporizador';

function Empleado5() {

  //Definir la variable de estado Empleado
  const [empleado, setempleado] = useState({
    nombre: '',
    apellidos: '',
    edad: ''
  });

  const [x, setX] = useState(true);

  const [empleados, setempleados] = useState([]);

  //Ejecutar solo al principio
  //Cargar la lista de empleados
/*7
  useEffect(() => {
    if (x) {
      fetch('http://localhost:5000/empleados')
        .then(response => response.json())
        .then(data => setempleados(data));
      setX(false);
    }
    else {
      setempleado({ ...empleado, ["nombre"]: empleado.nombre.toUpperCase() })
    }
  }, [empleado.nombre]);
*/

  useEffect(() => {
    fetch('http://localhost:5000/empleados')
        .then(response => response.json())
        .then(data => setempleados(data));
  },[]);

 useEffect(() => {
  setempleado({ ...empleado, ["nombre"]: empleado.nombre.toUpperCase() })
  }, [empleado.nombre]);
  
  




  function controlar(e) {
    setempleado({ ...empleado, [e.target.name]: e.target.value })
  }

  function grabar(evento) {
    evento.preventDefault();
    console.log(evento.target.name);
    console.log(empleado);
    //Añado el nuevo empleado al array empleados
    setempleados([...empleados, empleado]);

    //Limpiar los datos del formulario
    setempleado({
      nombre: '',
      apellidos: '',
      edad: 0
    });
  }

  return (
    <>
      <h2> LISTA DE EMPLEADOS</h2>
      <ul>
        {empleados.map(function f(emple) {
          return <li key={emple.nombre}>  {emple.nombre} - {emple.apellidos} </li>;
        })
        }
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
        <input type="submit" value="Añadir empleado" />
      </form>
    </>
  )
}

export default Empleado5