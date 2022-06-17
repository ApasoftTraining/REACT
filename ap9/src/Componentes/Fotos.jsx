import React from 'react'
import { useState,useEffect } from 'react';
import {Table} from 'react-bootstrap'
import useGetFotos from '../hooks/useGetFotos';

function Fotos() {

    const [url, seturl] = useState('https://jsonplaceholder.typicode.com/photos');
    
        const resultado =   useGetFotos(url);

   

    return (
        <div>
            <p className="display-2">LISTADO DE FOTOS</p>

           
            <table>
                <thead>
                  <tr>
                    <td>id</td>
                    <td>titulo</td>
                    <td>imagen</td>
                    </tr>
                    </thead>
                <tbody>
                  {
                    resultado &&
                    resultado.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><img src={item.thumbnailUrl}/></td>
                            </tr>)
                    })
                  }
                  </tbody>
            
         </table>
               
            <button className="btn btn-primary">ACEPTAR</button>
        </div>
    )
}

export default Fotos