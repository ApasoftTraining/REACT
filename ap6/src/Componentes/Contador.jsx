import React from 'react'

function Contador() {
  let contador = 0;

  const uno = (e) => {
    console.log(e);
    contador = 1;
    console.log(contador);
    document.getElementById("cont").innerHTML=contador;
    //document.getElementById("x").innerHTML = contador;
  }

  const dos = (e) => {
    console.log(e);
    contador = 2;
    console.log(contador);
    document.getElementById("cont").innerHTML=contador;
   //document.getElementById("x").innerHTML = contador;
  }


  return (
    <>
      <h1>Contador</h1>
      <h2 id="cont"> {contador}</h2>
      <button onClick={uno}>Poner 1</button>
      <button onClick={dos}>Poner 2</button>
    </>
  )
}

export default Contador