import React from 'react'
import { useState } from 'react'

function Coche() {
    //Definir un Array de Estado con Fabricantes 
  const [fabricantes, setFabricantes]=useState(['Renault','Citroen','Mercedes']);
  const [modelos,setModelos]=useState(['coupe','Berlina','4x4']);
  const [valor,setValor]=useState("");
  const [valorModelo,setValorModelo]=useState("");
  
  function addFabricante(){
    setFabricantes([...fabricantes,valor]);
 }
 function addModelo(){
    setModelos([...modelos,valorModelo]);
 }

  return (
    <div>
        <h2> Fabricantes de Coches</h2>
        <ul>{
               fabricantes.map ( function f(fabricante){
                    return <li key={fabricante}>  {fabricante}  </li>;
               }
            )}            
        </ul>
        <input type="text" name="fabri" value={valor} onChange={(e)=>setValor(e.target.value)} />
        <button onClick={addFabricante}>Añadir fabricante</button>
         <br>
         </br>
         <h2> Modelos de Coches</h2>
         <ul>{
               modelos.map ( function f(modelo){
                    return <li key={modelo}>  {modelo}  </li>;
               }
            )}            
        </ul>
        <input type="text" name="fabri1" value={valorModelo} onChange={(e)=>setValorModelo(e.target.value)} />
        <button onClick={addModelo}>Añadir modelo</button>

    </div>
  )
}

export default Coche