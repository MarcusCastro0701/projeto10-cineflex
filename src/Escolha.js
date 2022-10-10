import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Escolha(props) {
    const [imagem, setImagem] = useState(null);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setImagem(resposta.data);
            
        });


    }, []);

    if (imagem === null) {
        return (
            <Englobafilmes>
                <p>CARREGANDO</p>
            </Englobafilmes>
        );
    }
    console.log(imagem)
    function clique(filme){
        props.setNomeFilme(filme.title)
        props.setImgFilme(filme.posterURL)
        props.setIdFilme(filme.id)
    }
    
    return (
        <Englobafilmes>
            <p>ESCOLHA O FILME</p>
            {imagem.map((filme) => <Link to={`/sessoes/${filme.id}`}><img onClick={() => clique(filme)} src={filme.posterURL}/> </Link>)}
        </Englobafilmes>
    );


}

const Englobafilmes = styled.div`
    
    width: 100%
    background-color: lightblue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    img{
        width: 129px;
        height: 193px;
        margin-top: 15px;
        border: 3px solid lightgray;
    }
    p{
        margin-bottom: 30px;
        color: #293845;
        font-size: 200%;
        font-family: 'Roboto';
    }
`

