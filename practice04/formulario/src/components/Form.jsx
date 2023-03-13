import React from "react"
import { useEffect } from "react";
import { useState } from "react"

const Form = ({estudiante,estudiantes,setEstudiantes}) => {

    const [nombre,setNombre] = useState('');
    const [matricula,setMatricula] = useState('');
    const [carrera,setCarrera] = useState('');
    const [semestre,setSemestre] = useState('');
    const [error,setError] = useState(false);
    //const [actualizando, setActualizando] = useState(false);

    useEffect(() => {
        if(Object.keys(estudiante).length > 0){
            setNombre(estudiante.nombre);
            setCarrera(estudiante.carrera);
            setMatricula(estudiante.matricula);
            setSemestre(estudiante.semestre);
            //setActualizando(true);
        }else{
            //setActualizando(false);
        }
        
    }, [estudiante])
    

    const generarID = () => {
        const fecha = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        return random + fecha;
    }

    const manejadorSubmit = (e) => {

        e.preventDefault();
        if([nombre.trim(),matricula.trim(),carrera.trim(),semestre.trim()].includes('')){
            console.log('Existen campos faltantes');
            setError(true);
            return
        }
        setError(false);

        const objetoEstudiante = {
            nombre,
            matricula,
            carrera,
            semestre
        }

        if (estudiante.id){
            objetoEstudiante.id = estudiante.id;
            const estudianteActualizado = estudiantes.map(estudianteState => estudianteState.id === estudiante.id ? objetoEstudiante : estudianteState)
            setEstudiantes(estudianteActualizado);
            //setActualizando(false);
            estudiante.id = "";
        }else{
            objetoEstudiante.id = generarID();
            setEstudiantes([...estudiantes,objetoEstudiante]);
        }
        //agregarEstudiante(objetoEstudiante);
        limpiar();
    }

    // const

    const limpiar = () => {
        setNombre('');
        setMatricula('');
        setCarrera('');
        setSemestre('');
    }

    return (
        <div className="p-[20px] md:w-1/2 lg:w2/5 bg-red-400 rounded-md text-[#ffffff] bg-gradient-to-b from-gray-800 via-pink-800 to-red-200">
            <h1 className="text-center text-xl font-bold">Registro de Estudiantes</h1>
            <h2 className="font-bold text-center">Agrega y Administra</h2>
            <form onSubmit={manejadorSubmit}>
                {error && (<div className="text-red-600 text-center font-semibold bg-red-100 mt-2 rounded-md"><p>Faltan campos por llenar</p></div>)}
                <div>
                    <label className="block mb-2 mt-10">Nombres</label>
                    <input type="text" placeholder="Name" className="border-2 p-1 w-full rounded-md mb-2 text-black" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label className="block mb-2">Matricula</label>
                    <input type="text" placeholder="Registration" className="border-2 p-1 w-full rounded-md mb-2 text-black" value={matricula} onChange={(e) => setMatricula(e.target.value)}/>
                </div>
                <div>
                    <label className="block mb-2">Carrera</label>
                    <input type="text" placeholder="Carrer" className="border-2 p-1 w-full rounded-md mb-2 text-black" value={carrera} onChange={(e) => setCarrera(e.target.value)}/>
                </div>
                <div>
                    <label className="block mb-2">Semestre</label>
                    <input type="text" placeholder="Semester" className="border-2 p-1 w-full rounded-md mb-2 text-black" value={semestre} onChange={(e) => setSemestre(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" className="w-full rounded-md p-2 uppercase bg-pink-800 hover:bg-gray-800 cursor-pointer" value={ estudiante.id ? 'Actualizar' : 'Agregar Estudiante'}/>
                </div>
            </form>
        </div>
        
    )
}

export default Form

/*     const agregarEstudiante = (nuevoEstudiante) => {
        const estudiantesActualizados = [...estudiantes, nuevoEstudiante];
        setEstudiantes(estudiantesActualizados);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantesActualizados));
    }; */