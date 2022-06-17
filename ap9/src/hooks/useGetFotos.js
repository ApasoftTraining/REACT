

import { useState, useEffect } from "react";


 function useGetFotos(url) {

    const [datos,setdatos]=useState([]);

       useEffect(() => {      
       fetch(url)
         .then(response=> response.json())
         .then(data =>  setdatos(data));
         
      return () => {
        console.log('Carga de fotos fianlizada');
      }
    }, [url]);

    return datos;    
  
}

export default useGetFotos;


