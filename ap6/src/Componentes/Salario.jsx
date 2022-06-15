import React from 'react'
import { useState } from 'react';

function Salario({salario,irpf}) {
   const[sueldo,setSueldo]=useState(salario);
   const[virpf,setVirpf]=useState(irpf);
   const[neto,setNeto]=useState(0);
    //Usamos en todos los elementos Variables de Estado

    function calcularNeto(){
        //let neto=0
        //neto=(sueldo - (sueldo*virpf/100));
        //document.getElementById("p1").innerHTML=neto
        setNeto(sueldo-(sueldo*virpf/100));
    }

  return (
   <>
       <p>Salario</p>
       <br/>
       <input type="text" name="salario" value={sueldo} onChange={   (e)=>setSueldo(e.target.value)  }/>
       <p>IRPF</p>
       <br/>
       <input type="text" name="irpf" value={virpf} onChange={(e)=>setVirpf(e.target.value)}/>
       <br></br>
       <p id="p1">El Salario NETO es {neto}</p>
       <button onClick={calcularNeto}> Calcular Salario</button>
   </>  
   )
}

export default Salario