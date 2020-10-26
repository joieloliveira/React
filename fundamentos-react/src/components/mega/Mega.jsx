import React, {useState} from "react"
import './Mega.css'


export default props =>{

    function gerarNumeroNaoContido(min,max,array){
        const aleatorio = parseInt(Math.random()*(max+1-min))+min
        return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min,max,array) : 
        aleatorio
    }
    //função para gerar numeros aleatorios sem repetição 1 ou 60
    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums)=>{
                const novoNumero = gerarNumeroNaoContido(1,60,nums)
                return [...nums,novoNumero]
            },[])
            .sort((n1,n2)=>n1-n2)//coloca os numeros em ordem crescente n1-n2 ou dec n2-n1
    
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    //caso não gere anteriormente sera tudo 0
    const numerosIniciais = Array(qtde).fill(0)
    //ou começar com numeros gerados anteriormente
    //const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div className="Mega">
            <h2>Megasena</h2>
            <h3>{numeros.join(' - ')}</h3> 
            <div>
                <label>Qtde de Números</label>
                <input min="6" max="10" type="number" value={qtde}
                onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}
//.join(' ') coloca um espaço em branco entre os numeros gerados