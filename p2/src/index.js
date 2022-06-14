import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Alumno from './Componentes/Alumno';
import Profesor from './Componentes/Profesor';
import Fragmento from './Componentes/Fragmento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />
);



const barra=ReactDOM.createRoot(document.getElementById('barra'));
barra.render(<Fragmento />);
/*
const otro=ReactDOM.createRoot(document.getElementById('otro-div'));
otro.render(<Profesor />);
*/
