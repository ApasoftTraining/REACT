import React from 'react'
import { useState } from 'react'

function Coche() {
    //Definir un Array de Estado con Fabricantes 
  const [fabricantes, setFabricantes]=useState(['Renault','Citroen','Mercedes']);
  const [valor,setValor]=useState("");
  


  return (
    <div>
        <h2> Fabricantes de Coches</h2>
        <ul>{
               fabricantes.map ( function f(fabricante){
                    return <li key={fabricante}>  {fabricante}  </li>;
               }
            )}            
        </ul>
        <input type="text" name="fabri" value={valor} />
        <button>Añadir fabricante</button>


    </div>
  )
}

export default Coche