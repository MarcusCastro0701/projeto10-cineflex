import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./globalStyle"
import Cima from "./Topo"
import Escolha from "./Escolha"
import Horarios from './Horarios';
import Assentos from "./Assentos"
import Confirma from "./Confirma"







export default function App(){

    let [arrSeats, setArrSeats] = React.useState([])
    let [idFilme, setIdFilme] = React.useState("")
    let [imgFilme, setImgFilme] = React.useState("")
    let [nomeFilme, setNomeFilme] = React.useState("")
    let [idSecao, setIdSecao] = React.useState("")
    let [horasSecao, setHorasSecao] = React.useState("")
    let [diaSecao, setDiaSecao] = React.useState("")
    let [nome, setNome] = React.useState("")
    let [cpf, setCpf] = React.useState("")
    let [data, setData] = React.useState("")
    
    function home(){
        setArrSeats([])
        setIdFilme("")
        setImgFilme("")
        setNomeFilme("")
        setIdSecao("")
        setHorasSecao("")
        setDiaSecao("")
        setNome("")
        setCpf("")
        setData("")
    }


    return (

        <BrowserRouter>

            <GlobalStyle />
            <Cima/>
            <Routes>
                <Route path="/" element={<Escolha setIdFilme = {setIdFilme} setImgFilme = {setImgFilme} setNomeFilme={setNomeFilme}/>}/>
                <Route path="/sessoes/:idFilme" element={<Horarios setData={setData} imgFilme={imgFilme} nomeFilme={nomeFilme} setIdSecao={setIdSecao} setHorasSecao={setHorasSecao} setDiaSecao={setDiaSecao}/>}/>
                <Route path="/assentos/:idSessao" element={<Assentos arrSeats={arrSeats} setArrSeats={setArrSeats} imgFilme={imgFilme} nomeFilme={nomeFilme} horasSecao={horasSecao} diaSecao={diaSecao} nome={nome} cpf = {cpf} setNome={setNome} setCpf={setCpf}/>}/>
                <Route path="/sucesso" element={<Confirma home={home} arrSeats = {arrSeats} data ={data} setCpf={setCpf} cpf={cpf} setNome={setNome} nome ={nome} setDiaSecao={setDiaSecao} diaSecao={diaSecao} setHorasSecao={setHorasSecao} imgFilme={imgFilme} setImgFilme={setImgFilme} nomeFilme={nomeFilme} setNomeFilme={setNomeFilme} horasSecao={horasSecao}/>}/>
            </Routes>
            
        </BrowserRouter>

    )
}



