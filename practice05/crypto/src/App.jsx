import { useState } from 'react'
import * as React from 'react';

import './App.css'
import styled from '@emotion/styled'
import ImageCrypto from './assets/bit2.png';
import Formulario from './components/Formulario';

function App() {
  const [count, setCount] = useState(0)

  const Contenedor = styled.div`
    max-width: 700px;
    margin: 0 auto;
    width: 90%;
    @media(min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }
  `;

  const Heading = styled.h1`
    font-family: 'Barlow', sans-serif;
    color: #ffffff;
    text-align: center;
    font-weight: 200;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 50px;

    &::after{
      content: '';
      width: 100px;
      height: 6px;
      background-color: #ffffff;
      display: block;
      margin: 10px auto 0 auto;
    }
  `;

  const Image = styled.img`
    max-width: 200px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
  `;

  const [open, setOpen] = React.useState(false);

  return (
    <Contenedor>
        <Image src={ImageCrypto} alt='Este es mi logo'/>
        <div>
          <Heading>BITCRYPT</Heading>
          <Formulario/> 
        </div>
        {/* <img src='src/assets/bit2.png'height={200} width={200}/> */}
    </Contenedor>
  )
}

export default App
