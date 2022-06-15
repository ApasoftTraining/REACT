import React from 'react'
let x=1000;
function Evento() {
    
    function hacerAlgo(evento,z)
    {
       console.log(evento);
       console.log(evento.target.innerHTML);
       console.log(z);
    }
    ;
  return (
    <div>
        <p>Evento </p>
          
        <button onClick={ (evento,x)=>hacerAlgo(evento,1000)  }>ACEPTAR</button>



    </div>
  )
}

export default Evento