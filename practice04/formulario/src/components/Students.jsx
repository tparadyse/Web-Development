import React from "react";
import { useState, useEffect } from "react";

    
const Students = ({ estudiante, setEstudiante,manejadorEliminarEstudiante}) => {
  //const [ultimoEstudiante, setUltimoEstudiante] = useState('');
  const { nombre, matricula, carrera, semestre } = estudiante;
  //useEffect

  return (
    <div className="py-10 shadow-lg px-3 rounded-md font-bold mt-5">
      <p className=" mb-2 uppercase">
        Nombres:{" "}
        <span className="font-normal ml-2 normal-case">{nombre}</span>
      </p>
      <p className=" mb-2 uppercase">
        Matricula:{" "}
        <span className="font-normal ml-2 normal-case">{matricula}</span>
      </p>
      <p className=" mb-2 uppercase">
        Carrera:{" "}
        <span className="font-normal ml-2 normal-case">{carrera}</span>
      </p>
      <p className=" mb-2 uppercase">
        Semestre:{" "}
        <span className="font-normal ml-2 normal-case">{semestre}</span>
      </p>
      <div className="flex justify-between mt-5 px-40">
        <button type="button" className="text-white bg-pink-700 hover:bg-gray-800 cursor-pointer rounded-md py-2 px-2" onClick={()=>manejadorEliminarEstudiante(estudiante.id)}>ELIMINAR</button>
        <button type="button" className="text-white bg-pink-700 hover:bg-gray-800 cursor-pointer rounded-md py-2 px-5" onClick={()=>setEstudiante(estudiante)}>EDITAR</button>
      </div>
    </div>
  );
};

export default Students;
    


/*       useEffect(() => {
        const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes"));
        if (estudiantesGuardados && estudiantesGuardados.length > 0) {
          setUltimoEstudiante(estudiantesGuardados[estudiantesGuardados.length - 1]);
        }
      }, []);  */ 

      
      
      
      