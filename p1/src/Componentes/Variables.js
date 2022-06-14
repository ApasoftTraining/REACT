import React from 'react'

const pintar= ()=>{
    return "Esto es una prueba";
};

const sumar= (a,b)=>{
    return a+b;
}



function Variables() {

   const texto="hola";
   const numero=100;
   const v=true;
   const array=[10,20,30,40];
   const coche={
       matricula: "m-1000",
       pvp: 1000
   }
    
  return (
    <>
        <p>Estoy en Variables</p>
        <p>Una expresion { 1 + 3  }</p>   
        <p>Otra Expresrio n { 2 * 7 /4 } </p>
        <p>Texto: { texto } </p>
        <p>Numero: { numero } </p>
        <p>Boolean: { v } </p>
        <p>Array: { array } </p>
        <p>Objeto: { JSON.stringify(coche) } </p>
        <p>Funcion {pintar()}</p>
        <p>Funcion con parámetros {sumar(10,20)} </p>

    </>
  )
}

export default Variables