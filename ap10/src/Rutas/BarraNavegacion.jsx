import React from 'react'
import { Link } from 'react-router-dom'
import RutaInformes from './RutaInformes'

function BarraNavegacion() {
  return (
    <div>
      <div>
        <Link to="/imperiales">Imperiales --- </Link>
        <Link to="/rebeldes">Rebeldes</Link>
        </div>
        <div>
        <Link to="/starttrek/klingon">Klingon --- </Link>
        <Link to="/federacion">Federacion</Link>
        </div>
        <RutaInformes />
    </div>
  )
}

export default BarraNavegacion