import React from 'react'
import {useState} from 'react';
import useGetFotos from '../hooks/useGetFotos';

function Fotos() {

  const [url, seturl] = useState('https://jsonplaceholder.typicode.com/photos');
    
  const resultado=useGetFotos(url);

  return (
    <div> 
        <p className="display-2">LISTADO DE FOTOS</p>

        <table className="table table-primary table-striped">
               <tr>
                   <th>Album</th>
                   <th>Titulo</th>
                   <th>imagen</th>
               </tr>
               {
                resultado &&
                resultado.map((album)=>{
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                 })


               }

        </table>
        <button className="btn btn-primary">ACEPTAR</button>
        
    </div>
  )
}

export default Fotos