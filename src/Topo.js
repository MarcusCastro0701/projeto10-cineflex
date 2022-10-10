import styled from "styled-components";

export default function Topo(){
    return(
        <Cima>
            <p>CINEFLIX</p>
        </Cima>
    )
}



const Cima = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 100px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    p{
        color: #E8833A;
        font-size: 250%;
        font-family: 'Roboto';
    }
`