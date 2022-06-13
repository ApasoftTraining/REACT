import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Alumno from './Componentes/Alumno';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />
);

const barra=ReactDOM.createRoot(document.getElementById('barra'));
barra.render(<Alumno />);
