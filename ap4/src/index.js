import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cabecera from './Componentes/Cabecera';
import Navegacion from './Componentes/Navegacion';
import Lateral from './Componentes/Lateral';

import Seccion from './Componentes/Seccion';

const cabecera = ReactDOM.createRoot(document.getElementById('cabecera'));
cabecera.render(
    <Cabecera /> 
);

const enlaces = ReactDOM.createRoot(document.getElementById('enlaces'));
enlaces.render(
    <Navegacion /> 
);

const lateral = ReactDOM.createRoot(document.getElementById('lateral'));
lateral.render(
    <Lateral /> 
);


const seccion = ReactDOM.createRoot(document.getElementById('seccion'));
seccion.render(
   <Seccion />
);
/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
