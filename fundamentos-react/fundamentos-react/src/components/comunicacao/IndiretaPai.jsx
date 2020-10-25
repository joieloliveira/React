import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function FornInfo(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
            <div>
                Pai 
                <span> {nome}</span>
                <span> {idade}</span>
                <span> {nerd ? 'Verdadeiro':'Falso'}</span>
            </div>
            <IndiretaFilho onClickBtt={FornInfo}></IndiretaFilho>
        </div>
    )
}
//destruction  = array
//const [a, b] = [1, 2]
//        destruction   =   array
//const [nome, setNome] = useState('?')
