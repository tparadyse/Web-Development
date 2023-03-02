import React from 'react'
//import '../styles/formularioStyle.css'

const Formulario = () => {
  return (
    <div className='containerForm'>
        <form>
            <h1>Form</h1>
            <label htmlFor="" className='labels'>Name</label>
            <input type="text" placeholder='Name' className='inputs'/>
            <label htmlFor="" className='labels'>Last Name</label>
            <input type="text" placeholder='Last Name' className='inputs'/>
            <label htmlFor="" className='labels'>Registration No</label>
            <input type="text" placeholder='Registration No' className='inputs'/>
            <label htmlFor="" className='labels'>Grade</label>
            <input type="text" placeholder='Grade' className='inputs'/>
            <label htmlFor="" className='labels'>Carrer</label>
            <input type="text" placeholder='Carrer' className='inputs'/>
            
            <button type="submit">Submit</button>
            
        </form>
    </div>
  )
}

export default Formulario