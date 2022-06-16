import React from 'react'
import { useState } from 'react'
import AddElemento from './AddElemento';

function Coche1() {
    //Definir un Array de Estado con Fabricantes 
  const [fabricantes, setFabricantes]=useState(['Renault','Citroen','Mercedes']);
  const [modelos,setModelos]=useState(['coupe','Berlina','4x4']);
  const [aeorlineas, setAerolineas]=useState(['iberia','AirEuropa','BA']);
   use

  return (
    <div>
        <h2> Fabricantes de Coches</h2>
        <ul>{
               fabricantes.map ( function f(fabricante){
                    return <li key={fabricante}>  {fabricante}  </li>;
               }
            )}            
        </ul>
        <AddElemento              
          tipo="fabricante" funcion={setFabricantes} 
          />         
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

        <h2> Aerolíneas</h2>
         <ul>{
               aeorlineas.map ( function f(aerolinea){
                    return <li key={aerolinea}>  {aerolinea}  </li>;
               }
            )}            
        </ul>
        <AddElemento tipo="aerolinea" funcion={setAerolineas} />  
    </div>
  )
}

export default Coche1