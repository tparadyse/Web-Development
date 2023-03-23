import {useState} from "react";
import styled from "@emotion/styled";

const useSelectorMonedas = (label, divisas) => {

    const Label = styled.label`
    color: white;
    display: block;
    font-family: 'Barlow', sans-serif;
    font-size: 24px;
    margin: 15px 0;
    `;

    const Select = styled.select`
        width: 100%;
        font-size: 18px;
        padding: 14px;
        border-radius: 10px;
        margin-bottom: 50px;
        background-color: #4e1111;
        color: white;
        //font-family: 'Barlow', sans-serif;

        &:focus {
        outline: none;
        border-color: #b50000;
        box-shadow: 0 0 5px rgba(102,175,233,.5);
        }
    `;

    ///////// TODO ///////////////////////////////////

    const [state, setState] = useState('');

    const SelectorMonedas = () => 
        <>
        <Label>{label}</Label>
        <Select value={state} onChange={e => setState(e.target.value)}>
            <option>Select a coin type</option>
            {divisas.map(opcion => (
                <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
            ))}
        </Select>
        </>

    return [state, SelectorMonedas]
}

export default useSelectorMonedas