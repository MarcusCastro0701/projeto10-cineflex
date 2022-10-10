import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import ForrestGumpLogo from "./assets/ForrestGumpPoster.jpg"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Horarios(props){

    const [secao, setSecao] = useState(null);
    const { idFilme } = useParams();

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

		requisicao.then(resposta => {
			setSecao(resposta.data.days);
		});

	}, []);

	if(secao === null) {
		return (
            <Opcao>
                <p>CARREGANDO...</p>
            </Opcao>
        );
	}

    function botao1(param){
        console.log(param.weekday)
        props.setIdSecao(param.id)
        props.setDiaSecao(param.weekday)
        props.setHorasSecao(param.showtimes[0].name)
        props.setData(param.date)
    }

    function botao2(param){
        console.log(param.weekday)
        props.setDiaSecao(param.weekday)
        props.setIdSecao(param.id)
        props.setHorasSecao(param.showtimes[1].name)
        props.setData(param.date)
    }
    
    return(
        <>
            <Engloba>
                <p>SELECIONE O HORÁRIO</p>
                {secao.map((opcao) => <Opcao> <p >{opcao.weekday} - {opcao.date}</p>  <Link to={`/assentos/${opcao.showtimes[0].id}`}><button onClick={() => botao1(opcao)}>{opcao.showtimes[0].name}</button></Link> <Link to={`/assentos/${opcao.showtimes[1].id}`}><button onClick={() => botao2(opcao)}>{opcao.showtimes[1].name}</button></Link> </Opcao>)}
                <Baixo> <img src = {props.imgFilme}/> <p>{props.nomeFilme}</p> </Baixo>
            </Engloba>
            
        </>
        
    )

}


const Engloba = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    padding-bottom: 75px;
    p{
        margin-bottom: 50px;
        color: #293845;
        font-size: 200%;
        font-family: 'Roboto';
    }
`

const Opcao = styled.div`
    margin-left: 30px;
    margin-bottom: 100px;
    width: 100%;
    p{
        margin-bottom: 30px;
        color: #293845;
        font-size: 140%;
        font-family: 'Roboto';
    }
    button{
        margin-right: 10%;
        width: 29%;
        height: 60%;
        background-color: #E8833A;
        border-radius: 8%
    }
`

const Baixo = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 200px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    padding-left: 14%;
    background-color: #C3CFD9;
    position: fixed;
    margin-top: 70px;
    bottom: -120px;
    p{
        color: #293845;
        font-size: 130%;
        font-family: 'Roboto';
        padding-bottom: 6.2%;
    }
    img{
        height: 50%;
        width: 17%;
        padding-bottom: 18%;
        margin-right: 5%;
        
    }
`