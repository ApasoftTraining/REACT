import React from 'react'
import { Routes,Route } from 'react-router'
import Home  from '../Home';
import Informe1 from '../paginas/Informes/Informe1';
import Imperio from '../paginas/Star Wars/Imperio';
import Rebeldes from '../paginas/Star Wars/Rebeldes';
import Federacion from '../paginas/Start Trek/Federacion';
import Klingon from '../paginas/Start Trek/Klingon';
import BarraNavegacion from './BarraNavegacion';

function RutaPrincipal() {
  return (
    <>
    <Routes>
       <Route path="/"  element={<Home />} />
       <Route path="/imperiales" element={<Imperio />} /> 
       <Route path="/rebeldes" element={<Rebeldes />} /> 
       <Route path="/starttrek/klingon" element={<Klingon />} /> 
       <Route path="/federacion" element={<Federacion />} /> 
    </Routes>
    <BarraNavegacion />
    
    
    </>




    
  )
}

export default RutaPrincipal