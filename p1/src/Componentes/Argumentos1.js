import React from 'react'

function Argumentos1(props) {
  return (
    <div>
         <h2>Calculo del salario</h2>
         <p>Nomina: { props.sueldo }</p>
         <p>IRPF: { props.irpf }</p>
         <p>Nomina neta: { props.sueldo-(props.sueldo*props.irpf/100) }</p>
    </div>
  )
}

export default Argumentos1