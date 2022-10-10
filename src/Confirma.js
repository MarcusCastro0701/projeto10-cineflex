import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Confirma(props){

    

    return(
        <>
            <Sucesso>
                Pedido Feito com sucesso!
            </Sucesso>
            <Dados>
                <Main>
                    Filme e sessão
                </Main>
                    
                <Second>
                    {props.nomeFilme}
                </Second>
                <Second>
                    {props.data} - {props.horasSecao}
                </Second>
            </Dados>

            <Dados>
                <Main>
                    ingressos
                </Main>
                    
                {props.arrSeats.map((fator) => <Second>ingresso {fator}, </Second>)}
                
            </Dados>

            <Dados>
                <Main>
                    Comprador
                </Main>
                    
                <Second>
                    {props.nome}
                </Second>
                <Second>
                    {props.cpf}
                </Second>
            </Dados>

            <Link to={`/`}>
                <Botao onClick={props.home}>
                    <p>Voltar para home</p>
                </Botao>
            </Link>
        </>
    )
}

const Sucesso = styled.p`
    margin-bottom: 30px;
    color: #247A6B;
    font-size: 150%;
    font-weight: 500;
    font-family: 'Roboto';
    padding-left: 12.5%;
    margin-bottom: 18%;
`

const Dados = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 11.7%;
    margin-bottom: 22%;
`

const Main = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #293845;
`

const Second = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
color: #293845;
`

const Botao = styled.button`
width: 60%;
background-color: #E8833A;
color: #ffffff;
padding: 8%;
border: none;
border-radius: 8px;
margin-left: 20%;
p{
    font-size: 150%;
}
`