import React from 'react'
//import '../styles/registrosStyle.css'

const Registros = () => {
  return (
    <div className='containerRegister'>
        <form>
            <h1>Register</h1>
            <label htmlFor="" className='labels'>Name</label>
            <input type="text" placeholder='Name' className='inputs'/>
            <label htmlFor="" className='labels'>Last Name</label>
            <input type="text" placeholder='Last Name' className='inputs'/>
            <label htmlFor="" className='labels'>Username</label>
            <input type="text" placeholder='Username' className='inputs'/>
            <label htmlFor="" className='labels'>Email</label>
            <input type="email" name="email" id="" placeholder='Email' className='inputs'/>
            <label htmlFor="" className='labels'>Password</label>
            <input type="password" name="password" id="" placeholder='Password' className='inputs'/>
            
            <button type="submit">Submit</button>
            
        </form>
    </div>
  )
}

export default Registros