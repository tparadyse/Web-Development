import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Error from './Error';
import useSelectorMonedas from '../hooks/useSelectorMonedas';
import { monedas } from '../data/monedas';
import DataCrypto from './DataCrypto';

const InputSubmit = styled.input`
    background-color: #4e1111;
    border: none;
    height: 40px;
    width: 100%;
    padding: 10px;
    color: white;
    font-size: 20px;
    border-radius: 12px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #920c0c;
        cursor: pointer;
    }
`;

const Cargando = styled.div`
border: 5px;
border-top: 5px solid #f3f3f3;
border-radius: 50%;
width: 50px;
height: 50px;
margin: 30px auto;
animation: spin 1s linear infinite;
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
;
`

const Formulario = () => {
    const [error, setError] = useState(false);
    const [vista, setVista] = useState(false);

    const [data, setData] = useState([]);

    const [cryptos, setCryptos] = useState([]);

    const [moneda, SelectorMonedas] = useSelectorMonedas('Choose your currency', monedas);
    const [cryptomoneda, SelectorCrypto] = useSelectorMonedas('Choose your crypto', cryptos);

    const [ViewCrypto] = DataCrypto(data);

    const [cargando, setCargando] = useState(true);

    const cont = 0;

    useEffect(() => {
        if (cont == 0)
        setCargando(false);
        const consultarApi = async (divisa) => {
            if(['', '---'].includes(divisa)){
                divisa = 'USD';
            }
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=${divisa}`; //Modificar la url y meter la moneda {USD}
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arregloCryptos = resultado.Data.map(crypto => {
                const objetoCrypto = {
                    divisa: divisa,
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName,
                    image: crypto.DISPLAY[divisa].IMAGEURL,
                    actual: crypto.DISPLAY[divisa].PRICE,
                    openday: crypto.DISPLAY[divisa].OPENDAY,
                    highday: crypto.DISPLAY[divisa].HIGHDAY,
                    lowday: crypto.DISPLAY[divisa].LOWDAY,
                }
                return objetoCrypto;
            });
            setCryptos(arregloCryptos);
        }

        consultarApi(moneda);
    }, [moneda, cryptomoneda])
    
    const manejadorSubmit = async (e) => {
        e.preventDefault();

        console.log('Se envio el formulario...');

        if([moneda,cryptomoneda].includes('')) {
            console.log("error, echele datos mijo");
            setError(true);
            setVista(false);
            return
        } else {
            setError(false);
            setVista(true);
        }
      
        if([moneda,cryptomoneda].includes('Seleccione una divisa')) {
            console.log("error, echele datos mijo");
            setError(true);
            setVista(false);
            return
        }else {
            setError(false);
            setVista(true);
        }

        function cotizarCrypto(cryptomoneda){
            // Buscamos en el array el objeto que corresponde a la criptomoneda
            const objetoCriptomoneda = cryptos.find(objetoCrypto => objetoCrypto.id === cryptomoneda);
    
            // Si el objeto no se encontró, devolvemos undefined
            if (!objetoCriptomoneda) {
                return undefined;
            }
            
            setData(objetoCriptomoneda);
        }

        cotizarCrypto(cryptomoneda);

        setError(false);
        setVista(true);
        //setCargando(false);

        return

    }


    return(
        <>
        {error && <Error>You need to complete the selectors</Error>}
        <form onSubmit={manejadorSubmit}>
            <SelectorMonedas/>
            <SelectorCrypto/>
            <InputSubmit type="submit" value="Quote a price"/>
            {cargando ? (<Cargando/>) : (<div>{vista && <ViewCrypto/>}</div>)}
        </form>
        </>
    )
}

export default Formulario



