import React from 'react'
function Boton( {texto, metodo }) {

    //Comandos 
    return (  
      <button onClick={ metodo }> { texto.toUpperCase() } </button>
    );
}

export default Boton