import React from "react"
import Students from "./Students"

const List = () => {
    return (
        <div className="p-[20px] md:w-1/2 lg:w-3/5 bg-yellow-400 rounded-md text-[#fffffc] overflow-y-scroll h-screen bg-gradient-to-b from-gray-800 via-pink-800 to-red-200">
            <h1 className="font-bold text-center text-xl">Listado de Estudiantes</h1>
            <h2 className="font-bold text-center">Administra Estudiantes</h2>

            <Students/>
            <Students/>
            <Students/>
            <Students/>
            <Students/>



        </div>
        
    )
}

export default List