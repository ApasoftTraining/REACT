import React from 'react'
import { useState } from 'react'

function AddPropiedad({ funcion }) {

  //Definir la variable de estado Empleado
  const [valor, setvalor] = useState("");
  const [propiedad, setpropiedad] = useState("");
  function controlar_nombre(e) {
    setpropiedad(e.target.value)
  }
  function controlar_valor(e) {
    setvalor(e.target.value)
  }


  function grabar(evento) {
    evento.preventDefault();
    funcion;
    {...v, [propiedad]: valor };

    return (
      <form name="form1" onSubmit={grabar}>
        <label>Nombre Propiedad</label>
        <input type="text" value={propiedad} name="nombre" onChange={controlar_nombre} />
        <br></br>
        <label>Valor</label>
        <input type="text" value={valor} name="apellidos" onChange={controlar_valor} />

        <input type="submit" value="Guardar" />

      </form>
    )
  }

  export default AddPropiedad;