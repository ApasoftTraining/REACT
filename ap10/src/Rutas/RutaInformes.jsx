import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Informe1 from '../paginas/Informes/Informe1'
import Informe2 from '../paginas/Informes/Informe2'

function RutaInformes() {
  return (
    <>
       <Routes>
       <Route path="/informe1" element={<Informe1 />} /> 
       <Route path="/informe2" element={<Informe2 />} />
       </Routes>
    
       </>

  )
}

export default RutaInformes