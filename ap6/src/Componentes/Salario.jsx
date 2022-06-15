import React from 'react'

function Salario() {
  return (
   <form>
       <p>Salario</p>
       <br/>
       <input type="text" name="salario"/>
       <p>IRPF</p>
       <br/>
       <input type="text" name="irpf"/>
       <br></br>
       <p>El Salario NETO es {}</p>



   </form>  
   )
}

export default Salario