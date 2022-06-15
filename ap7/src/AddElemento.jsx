import React from 'react'
import {useState} from 'react'


function AddElemento({tipo, funcion }) {
    const [valor,setValor]=useState("");

    function addItem(){
        funcion (v=>[...v,valor]);
    }

  return (

   <div>
    <h2> Añadiendo un elemento de tipo {tipo} </h2>

    <input type="text" value={valor} onChange={(e)=>setValor(e.target.value)} />
    <button onClick={addItem}>Añadir {tipo} </button>
   </div>
  )
}

export default AddElemento