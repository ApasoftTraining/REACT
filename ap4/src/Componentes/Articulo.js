import React from 'react'

function Articulo({ cabecera, cuerpo, pie }) {
    return (
       <>
            <header>
                <h1>{cabecera}</h1>
            </header>
                <p>{cuerpo}</p>
            <footer>
                <h2>{pie}</h2>
            </footer>
        </>
    )
}

export default Articulo