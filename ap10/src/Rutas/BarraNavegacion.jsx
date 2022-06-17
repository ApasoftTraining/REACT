import React from 'react'
import { Link } from 'react-router-dom'

function BarraNavegacion() {
  return (
    <div>
        <Link to="/imperiales">Imperiales --- </Link>
        <Link to="/rebeldes">Rebeldes</Link>
    </div>
  )
}

export default BarraNavegacion