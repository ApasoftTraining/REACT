import React from 'react'
import { useState } from 'react';

function Contador1( { contador}) {
  
  
  const [c1, setC1  ]=useState(contador);


  const aumentar = (e) => {
    console.log(e);
    setC1(c1+1);
    
   
  }

  const disminuir = (e) => {
    console.log(e);
    setC1(c1-1);
    
   
  }


  return (
    <>
      <h1>Contador</h1>
      <h2> {c1}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </>
  )
}

export default Contador1