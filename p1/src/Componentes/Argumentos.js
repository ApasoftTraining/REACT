import React from 'react'



//Función iniciales
const iniciales=(n,a1,a2)=>{
    return `${n[0]}.${a1[0]}.${a2[0]}`
}
 

function Argumentos( props) {  
  return (
    <>
        
        <p>Iniciales: { iniciales(props.nombre,props.ape1,props.ape2)  }</p>

    </>
  )
}

export default Argumentos