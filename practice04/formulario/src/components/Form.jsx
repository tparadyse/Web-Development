import React from "react"

const Form = () => {
    return (
        <div className="p-[20px] md:w-1/2 lg:w2/5 bg-red-400 rounded-md text-[#ffffff] bg-gradient-to-b from-gray-800 via-pink-800 to-red-200">
            <h1 className="text-center text-xl font-bold">Registro de Estudiantes</h1>
            <h2 className="font-bold text-center">Agrega y Administra</h2>
            <form>
                <div>
                    <label className="block mb-2 mt-10">Nombres</label>
                    <input type="text" placeholder="Name" className="border-2 p-1 w-full rounded-md mb-2 text-black"/>
                </div>
                <div>
                    <label className="block mb-2">Matricula</label>
                    <input type="text" placeholder="Registration" className="border-2 p-1 w-full rounded-md mb-2 text-black"/>
                </div>
                <div>
                    <label className="block mb-2">Carrera</label>
                    <input type="text" placeholder="Carrer" className="border-2 p-1 w-full rounded-md mb-2 text-black"/>
                </div>
                <div>
                    <label className="block mb-2">Semestre</label>
                    <input type="text" placeholder="Semester" className="border-2 p-1 w-full rounded-md mb-2 text-black"/>
                </div>
                <div>
                    <input type="submit" className="w-full rounded-md p-2 uppercase bg-pink-800 hover:bg-gray-800 cursor-pointer" value='Agregar Estudiante'/>
                </div>
                
            </form>
        </div>
        
    )
}

export default Form