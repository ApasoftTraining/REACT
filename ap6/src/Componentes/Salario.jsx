import React from 'react'

function Salario() {

    //Usamos en todos los elementos Variables de Estado
  return (
   <>
       <p>Salario</p>
       <br/>
       <input type="text" name="salario"/>
       <p>IRPF</p>
       <br/>
       <input type="text" name="irpf"/>
       <br></br>
       <p>El Salario NETO es {}</p>
       <button> Calcular Salario</button>
   </>  
   )
}

export default Salario