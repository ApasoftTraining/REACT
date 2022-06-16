import React from 'react';
import '../Estilos/boton.css';


function Boton( {texto, metodo, estilo }) {
    let a="";
    //Comandos 
    if (estilo)
      a="boton-normal";
      else
      a="boton-reset";
    
    return (  
      
      <button onClick={ metodo }   className={estilo? 'boton-normal':'boton-reset'} > { texto.toUpperCase() } </button>
    );
}

//<button onClick={ metodo }   className={a} > { texto.toUpperCase() } </button>

export default Boton