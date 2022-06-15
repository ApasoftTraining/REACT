import React from 'react'
import { useState } from 'react'

function Coche() {
    //Definir un Array de Estado con Fabricantes 
  const [fabricantes, setFabricantes]=useState(['Renault','Citroen','Mercedes']);
  


  return (
    <div>
        <h2> Fabricantes de Coches</h2>
        <ul>{
               fabricantes.map ( function f(fabricante){
                    return <li>  {fabricante}  </li>;
               }
            )}
            
        </ul>


    </div>
  )
}

export default Coche