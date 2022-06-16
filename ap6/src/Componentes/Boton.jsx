import React from 'react';
import '../Estilos/boton.css';


function Boton( {texto, metodo }) {

    //Comandos 
    return (  
      <button onClick={ metodo }   className='boton-reset' > { texto.toUpperCase() } </button>
    );
}

export default Boton