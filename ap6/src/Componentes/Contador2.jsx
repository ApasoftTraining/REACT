import React from 'react'
import { useState } from 'react';

function Contador2({ contador, caja }) {

  //Varialbe local de la funcion
  let v1 = 0;
  //Varoiables de Estado globales
  const [c1, setC1] = useState(contador);
  const [dato_caja, setDatoCaja] = useState(caja);


  const aumentar = (e) => {
    console.log(e);
    setC1(c1 + 1);
  }

  const disminuir = (e) => {
    console.log(e);
    setC1(c1 - 1);
    v1 = v1 - 1;
    document.getElementById("p1").innerHTML = v1
  }

  const reset = () => {
    setC1(contador);
  }

  function pintar_caja(e) {
    console.log(e.target.value);
    setDatoCaja(e.target.value);
  }
  return (
    <>
      <h1>Contador</h1>
      <h2> {c1}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reset}>Resetear</button>

      <input type="text" value={dato_caja} onChange={pintar_caja} />
      <p> {dato_caja.toUpperCase()} </p>
      <p id="p1"> {v1} </p>
    </>
  )
}

export default Contador2