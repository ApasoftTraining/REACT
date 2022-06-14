
import './App.css';
import Alumno from './Componentes/Alumno';
import Argumentos from './Componentes/Argumentos';
import Argumentos1 from './Componentes/Argumentos1';
import Argumentos2 from './Componentes/Argumentos2';
import Fragmento from './Componentes/Fragmento';
import Profesor from './Componentes/Profesor';
import PropTipos from './Componentes/PropTipos';
import Variables from './Componentes/Variables';

function App() {
  return (
    <div>
      <h1>Ejemplo de componentes anidados</h1>
      <Fragmento />
      <h2> Elemento Profesor</h2>
      <Profesor />
      <h2> Elemento Alumno</h2>
      <Alumno />
      <h2>Elemento Variables</h2>
      <Variables />
      <h2>Elemento Argumentos</h2>
      <Argumentos arg1={100} nombre="Alberto" ape1="Perez" ape2="XXXXX" />
      <h2>Elemento Calculo salario</h2>
      <Argumentos1 sueldo={1000} irpf={15} />
      <h2>Elemento Desestructuracion</h2>
      <Argumentos2 sueldo="1000" irpf={15} arg1="hola2" arg2="pepe" arr1={[1,2,3,4]}/>
      <h2>Elemento Tipos de Propiedades</h2>
      <PropTipos sueldo={1000} irpf={15} arg1="hola" arg2="pepe" arr1={[1,2,3,4]}/>
    </div>
  );
}

export default App;
