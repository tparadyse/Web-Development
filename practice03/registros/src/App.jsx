import './App.css'
import Cabecera from './components/Cabecera'
import Formulario from './components/formulario'
import Registros from './components/registros'

function App() {

  return (
    <div className="App">
      <Cabecera titulo='Registro Estudiantes'/>

        <Registros/>  
    </div>
  )
}

export default App
