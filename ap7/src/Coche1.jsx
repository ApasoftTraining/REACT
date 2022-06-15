import React from 'react'
import { useState } from 'react'
import AddElemento from './AddElemento';

function Coche1() {
    //Definir un Array de Estado con Fabricantes 
  const [fabricantes, setFabricantes]=useState(['Renault','Citroen','Mercedes']);
  const [modelos,setModelos]=useState(['coupe','Berlina','4x4']);
 

  return (
    <div>
        <h2> Fabricantes de Coches</h2>
        <ul>{
               fabricantes.map ( function f(fabricante){
                    return <li key={fabricante}>  {fabricante}  </li>;
               }
            )}            
        </ul>
        <AddElemento tipo="fabricante" funcion={setFabricantes} />         
         <br>
         </br>
         <h2> Modelos de Coches</h2>
         <ul>{
               modelos.map ( function f(modelo){
                    return <li key={modelo}>  {modelo}  </li>;
               }
            )}            
        </ul>
        <AddElemento tipo="modelo" funcion={setModelos} />         
    </div>
  )
}

export default Coche1