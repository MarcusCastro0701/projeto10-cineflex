import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import ForrestGumpLogo from "./assets/ForrestGumpPoster.jpg"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Assentos(props){

    const [seats, setSeats] = useState(null);
    
    const {idSessao} = useParams();

	useEffect(() => {
        
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
			setSeats(resposta.data.seats);
        
		});

	}, []);


    function fazerLogin (event) {
		event.preventDefault();
        console.log(props.cpf.length)
        
        if(props.cpf.length !== 11){
            alert("insira um CPF existente no formato indicado")
        }else{
            alert("concluído")
        }

        const postagem = {
            ids: props.arrSeats,
            name: props.nome,
            cpf: props.cpf
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", postagem)

        promise.catch(err => console.log(err))
        promise.then(console.log("sucesso"))
    }

    function Selecionaacento(props){

        

        function filtroGeral(fator){
            
            if (props.arrSeats.includes(fator) === true) {
                const filteredSeats = props.arrSeats.filter((s) => !(s === fator));
                props.setArrSeats([...filteredSeats]);
            }
            else{
                props.setArrSeats([...props.arrSeats, fator])
            }

            console.log(props.arrSeats)
        }
        

        return(
            <Seats  disabled={!props.fatorisavailable} onClick={() => filtroGeral(props.fatorname)}> {props.fatorname} </Seats>
        )
    }
    
    if(seats === null){
        return(
            <Loading>CARREGANDO...</Loading>
        )
    }

   
    
    return(
        <>
            <Selecione>Selecione o(s) assento(s)</Selecione>

            <Engloba>
                {seats.map((fator) => <Selecionaacento setArrSeats ={props.setArrSeats} arrSeats={props.arrSeats} fatorisavailable={fator.isAvailable} fatorname={fator.name}/>)}
            </Engloba>

            <Englobabaixo>
                <Opcao>
                    <Cinza></Cinza>
                    <p>Disponível</p>
                </Opcao>
                <Opcao>
                    <Amarelo></Amarelo>
                    <p>Indisponível</p>
                </Opcao>
            </Englobabaixo>

            <Englobabaixo2>
                
                <p>Assentos selecionados por você: </p>
                {props.arrSeats.map((fator) => <> {fator}, </> )}
                
            </Englobabaixo2>

            <Englobaform onSubmit={fazerLogin}>
                <p>Nome do comprador(a):</p>
                <input type="name" value={props.nome} onChange={e => props.setNome(e.target.value)} required/>

                <p>CPF do comprador(a):</p>
                <input type="number" name="cpf" placeholder="Digite um CPF (apenas os números, sem espaços)" value={props.cpf} onChange={e => props.setCpf(e.target.value)} required/>

                <Link to = {`/sucesso`}><button type="submit">Reservar acento(s)</button></Link>
            </Englobaform>
            <Baixo> <img src = {props.imgFilme}/> <p>{props.nomeFilme} - {props.diaSecao} e {props.horasSecao}</p> </Baixo>
        </>
    )

}

const Engloba = styled.div`
    width: 100%;
    height: 253px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 4px;
`
const Seats = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.0%;
    height: 11%;
    background-color: #C3CFD9;
    border-radius: 12px;
    border: 1px solid #808F9D;
    margin-right: 5px;
    &:disabled{
        background-color: #FBE192;
    }
`

const Selecione = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    width: 390px;
    margin-bottom: 25px;
`
const Englobabaixo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Englobabaixo2 = styled.div`
    width: 60%;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-left: 18%;
    font-family: 'Roboto';
    color: #293845;
    p{
        margin-bottom: 8px;
    }
`

const Opcao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 13px;
        margin-top: 6px;
        font-family: 'Roboto';
    }
`
const Verde = styled.button`
    width: 25px;
    height: 25px;
    background-color: #1AAE9E;
    border: 1px solid black;
    border-radius: 50%;
`
const Cinza = styled.button`
    width: 25px;
    height: 25px;
    background-color: #C3CFD9;
    border: 1px solid black;
    border-radius: 50%;
`
const Amarelo = styled.button`
    width: 25px;
    height: 25px;
    background-color: #FBE192;
    border: 1px solid black;
    border-radius: 50%;
`
const Englobaform = styled.form`
    
    padding: 30px 0 0 45px;
    margin-top: 25px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    input{
        width: 80%;
        height: 38px;
        margin-bottom: 20px;
        
    }
    p{
        font-family: 'Roboto';
        font-size: 18px;
        margin-bottom: 9px;
    }
    button{
        width: 45%;
        height: 48px;
        margin-left: 18%;
        background-color: #E8833A;
        border:none;
        border-radius: 3px;
        color: #ffffff;
    }
`
const Loading = styled.p`
    margin: 25%;
    font-size: 30px;
    font-family: 'Roboto';
`
const Baixo = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 180px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    padding-left: 14%;
    background-color: #C3CFD9;
    position: fixed;
    margin-top: 70px;
    bottom: -100px;
    p{
        color: #293845;
        font-size: 150%;
        font-family: 'Roboto';
        padding-bottom: 15.2%;
    }
    img{
        height: 50%;
        width: 17%;
        padding-bottom: 18%;
        margin-right: 5%;
        
    }
`

