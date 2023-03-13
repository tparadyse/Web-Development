import { useEffect,useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"


function App() {
  //Es para tener la lista de estudiantes
  const [estudiantes,setEstudiantes] = useState([]);
  //Se almacena el estudiante a modificar
  const [estudiante,setEstudiante] = useState({});

  // useEffect

  return (
    <div className='container p-[20px]'>
      <Header/>
      <div className='mt-12 md:flex gap-10'>
        <Form estudiantes = {estudiantes} setEstudiantes = {setEstudiantes} estudiante = {estudiante}/>
        <List estudiantes = {estudiantes} setEstudiante = {setEstudiante} setEstudiantes = {setEstudiantes}/>
      </div>
    </div>
  )
}

export default App

/*   useEffect(() => {
    const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes"));
    if (estudiantesGuardados) {
      setEstudiantes(estudiantesGuardados);
    }
  }, []); */