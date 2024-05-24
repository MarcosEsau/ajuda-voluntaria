import React from "react";
import "./style.css";

export default function Sobre() {

    return (
        <section className="home">
            <div className="max-width">
            <h1>SOBRE AS ENCHENTES</h1>
            <p style={{marginTop: 25}}>As enchentes que devastaram o Rio Grande do Sul em 2024 foram um evento climático extremo que causou perdas imensuráveis em vidas, propriedades e infraestrutura. Compreender as causas, consequências e desafios dessa tragédia é crucial para construirmos um futuro mais resistente a desastres naturais.</p>
            <h2>Causas:</h2>
            <ul>
                <li>
                    <span>Chuvas excepcionais:</span>O volume de chuva registrado em algumas regiões do estado foi superior a três vezes a média histórica para o período. Esse evento extremo foi intensificado por um sistema de alta pressão no Oceano Atlântico e por uma corrente de umidade vinda da Amazônia. 
                </li>
                <li>
                    <span>Urbanização desordenada:</span> A ocupação irregular de áreas de risco, como encostas e várzeas de rios, contribuiu significativamente para a gravidade das inundações. A impermeabilização do solo com asfalto e concreto também diminuiu a capacidade de absorção da água da chuva.  
                </li>
                <li>
                    <span>Falta de infraestrutura adequada: </span>A insuficiência de sistemas de drenagem urbana, canais e barragens agravou o impacto das chuvas, transbordando rios e córregos e inundando áreas populosas. 
                </li>
                <li>
                    <span>El Niño: </span>Fenômeno climático que provoca o aquecimento das águas oceânicas no Oceano Pacífico. Também contribuiu para a intensificação das chuvas no sul do Brasil. 
                </li>
            </ul>
            <img src="https://leouve.com.br/wp-content/uploads/2023/09/8c7572e6-339e-4e28-8c30-05f0630af739.jpg" alt="" />
            <h2>Impactos nas vidas:</h2>
            <p>Impacto na vida das pessoas: 
            As enchentes de 2024 tiveram um impacto devastador na vida das pessoas do Rio Grande do Sul. Famílias perderam suas casas, seus pertences e seus meios alimentícios. Muitas pessoas foram obrigadas a recomeçar suas vidas do zero, enfrentando dificuldades para encontrar moradia, alimentação e trabalho. A tragédia também causou traumas psicológicos profundos, especialmente em crianças e idosos. </p>
            <h1 style={{marginTop: 140}}>SOBRE O SITE</h1>
            <p style={{marginBottom: 200, marginTop: 30}}>Em tempos de crise, a solidariedade e a união são fundamentais para superar desafios. Foi com esse espírito que os alunos do 2º ano do Ensino Médio do SENAC Santa Cruz do Sul se mobilizaram para criar um site com o objetivo de redirecionar doações às vítimas das enchentes que recentemente afetaram o Rio Grande do Sul. O projeto, intitulado "esperança rs", é uma iniciativa que visa proporcionar ajuda rápida e eficiente para aqueles que mais precisam.
            <br></br>
            O site foi desenvolvido como uma plataforma centralizada onde doadores de todo o país podem contribuir com recursos financeiros, alimentos, roupas e outros itens essenciais. Através de uma interface amigável e intuitiva, os visitantes do site podem escolher entre diferentes formas de contribuição, seja por meio de doações em dinheiro, depósitos bancários ou entrega de suprimentos em pontos de coleta específicos.</p>
            </div>
        </section>
    );
}