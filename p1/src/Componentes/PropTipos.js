import React from 'react'
import PropTypes from 'prop-types';

function PropTipos({ sueldo, irpf, arg1 }   ) {
  return (
    <div>
         <h2>Calculo del salario</h2>
         <p>Nomina: { sueldo }</p>
         <p>IRPF: { irpf }</p>
         <p>Nomina neta: { sueldo-(sueldo*irpf/100) }</p>
         <p> Argumento1 {arg1} </p>
    </div>
  )
};


PropTipos.propTypes={
  sueldo: PropTypes.number,
  irpf: PropTypes.number,
  arg1: PropTypes.string
}

export default PropTipos;