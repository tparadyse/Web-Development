import { useEffect,useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"


function App() {
  const [estudiantes,setEstudiantes] = useState([]);

  return (
    <div className='container p-[20px]'>
      <Header/>
      <div className='mt-12 md:flex gap-10'>
        <Form estudiantes = {estudiantes} setEstudiantes = {setEstudiantes}/>
        <List/>
      </div>
    </div>
  )
}

export default App
