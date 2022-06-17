import React from 'react'
import { Routes,Route } from 'react-router'
import Home  from '../Home';
import Informe1 from '../paginas/Informes/Informe1';
import Imperio from '../paginas/Star Wars/Imperio';
import Rebeldes from '../paginas/Star Wars/Rebeldes';
import BarraNavegacion from './BarraNavegacion';

function RutaPrincipal() {
  return (
    <>
    <Routes>
       <Route path="/"  element={<Home />} />
       <Route path="/informe1" element={<Informe1 />} /> 
       <Route path="/imperiales" element={<Imperio />} /> 
       <Route path="/rebeldes" element={<Rebeldes />} /> 
    </Routes>
    <BarraNavegacion />
    
    
    </>




    
  )
}

export default RutaPrincipal