import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'


export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Gustavo"/>
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="João"/>
                </Familia>          
            </Card>

            <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={5} max={30} />
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parâmetro" color="#E8B71A">
                <ComParametro
                    Titulo="Situação do aluno "
                    subtitulo="Joiel " nota={9.9} situacao />
                <ComParametro
                    Titulo="Situação do aluno "
                    subtitulo="Lemos " nota={4} situacao />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>



    </div>
);
