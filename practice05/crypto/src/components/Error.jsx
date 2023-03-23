import styled from "@emotion/styled";

const Texto = styled.div`
background-color: #ff0303;
color: #ffffff;
padding: 15px;
font-size: 20px;
text-transform: uppercase;
font-family: 'Barlow', sans-serif;
font-weight:bolder;
margin-top: 30px;
border-radius: 12px;
text-align: center;
`;

const Error = ({children}) => {
    return (
        <Texto>{children}</Texto>
    )
}

export default Error