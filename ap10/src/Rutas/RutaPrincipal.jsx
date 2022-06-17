import React from 'react'
import { Routes,Route } from 'react-router'
import Home  from '../Home';
import Informe1 from '../paginas/Informes/Informe1';

function RutaPrincipal() {
  return (
    <>
    <Routes>
       <Route path="/"  element={<Home />} />
       <Route path="/informe1" element={<Informe1 />} /> 
    </Routes>
    
    
    </>




    
  )
}

export default RutaPrincipal