import React from 'react'

function Contador1() {
  let contador = 0;

  const aumentar = (e) => {
    console.log(e);
    contador = contador+1;
    console.log(contador);
    document.getElementById("cont").innerHTML=contador;
    //document.getElementById("x").innerHTML = contador;
  }

  const disminuir = (e) => {
    console.log(e);
    contador = contador-1;
    console.log(contador);
    document.getElementById("cont").innerHTML=contador;
   //document.getElementById("x").innerHTML = contador;
  }


  return (
    <>
      <h1>Contador</h1>
      <h2 id="cont"> {contador}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </>
  )
}

export default Contador1