import React from 'react'

function Argumentos2({ sueldo, irpf, arg1 }   ) {
  return (
    <div>
         <h2>Calculo del salario</h2>
         <p>Nomina: { sueldo }</p>
         <p>IRPF: { irpf }</p>
         <p>Nomina neta: { sueldo-(sueldo*irpf/100) }</p>
         <p> Argumento1 {arg1} </p>
    </div>
  )
}

export default Argumentos2