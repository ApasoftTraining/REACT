
import './App.css';
import Alumno from './Componentes/Alumno';
import Argumentos from './Componentes/Argumentos';
import Argumentos1 from './Componentes/Argumentos1';
import Fragmento from './Componentes/Fragmento';
import Profesor from './Componentes/Profesor';
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
      <Argumentos arg1="hola" nombre="Pedro" ape1="Perez" ape2="XXXXX" />
      <h2>Elemento Calculo salario</h2>
      <Argumentos1 sueldo={1000} irpf={15} />
    </div>
  );
}

export default App;
