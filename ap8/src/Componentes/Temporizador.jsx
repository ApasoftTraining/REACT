import React from 'react'
import { useState, useEffect } from 'react'

function Temporizador() {


    const [temporizador, settemporizador] = useState(60);
    const [t, sett] = useState(1);
   
    useEffect(() => {
      
        setTimeout(() => {
            settemporizador(temporizador-1);
        }, 1000);

        return()=>{
            console.log('Proceso de limpieza');
        }
    })
    
  

  return (
    <div>Te quedan {temporizador} segundos</div>
  )
}

export default Temporizador