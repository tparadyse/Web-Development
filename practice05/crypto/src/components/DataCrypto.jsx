import React from 'react'
import styled from '@emotion/styled'

export const DataCrypto = (data,props) => {

    const P = styled.p`
        display: flex;
        justify-content: space-between;
        text-align: right;
        margin-top: 0px;
        font-size: 18px;
        font-weight: 30px;
        @media screen and (max-width: 480px){
            font-size: 14px;
        }
    `;

    const Span = styled.span`
    `;

    const Contenedor = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: #4e1111;
        width: 100%;
        height: 200px;
        color: white;
        padding: 5px;
        text-align: right;
        margin-top: 10px;
        border-radius: 10px;
        font-family: 'Barlow', sans-serif;
        @media screen and (max-width: 480px){   
            //height: 150px;
        }
    `;

    const ContenedorLetras = styled.div`
        justify-content: space-between;
        width: 100%;
        max-width: 700px;
        color: white;
        padding: 15px;
        margin-top: 10px;
        //margin-left: 20px;
        text-align: right;
        font-family: 'Barlow', sans-serif;
        @media screen and (max-width: 480px){
            padding: 5px;
            margin-top: 10px;
            margin-left: 5px;
        }
    `;

    const Imagen = styled.img`
        max-width: 100px;
        margin-right: 50px;
        width: 100%;
        //display: block;
        @media screen and (max-width: 480px){
        max-width: 60px;
            margin-right: 25px;
        }
    `;

    const ContenedorImagen = styled.div`
        width: 50%;
        max-width: 180px;
        @media screen and (max-width: 480px){
            max-width: 120px;
        }
    `;

    const imagenUrl = `https://cryptocompare.com${data.image}`;
    
    const ViewCrypto = () =><>
    <Contenedor>
        <ContenedorImagen>
            <Imagen src={imagenUrl} alt='Imagen Crypto'/>
        </ContenedorImagen>
        <ContenedorLetras>
            <P><span>actual price:</span>{data.actual}</P>
            <P><span>initial price:</span>{data.openday}</P>
            <P><span>lowest price:</span>{data.lowday}</P>
            <P><span>highest price:</span>{data.highday}</P>
        </ContenedorLetras>
    </Contenedor>
    </>

    return [ViewCrypto]
}

export default DataCrypto