
import './App.css';
import Alumno from './Componentes/Alumno';
import Profesor from './Componentes/Profesor';

function App() {
  return (
    <div>
      <h1>Ejemplo de componentes anidados</h1>
      <h2> Elemento Profesor</h2>
      <Profesor />
      <h2> Elemento Alumno</h2>
      <Alumno />
    </div>
  );
}

export default App;
