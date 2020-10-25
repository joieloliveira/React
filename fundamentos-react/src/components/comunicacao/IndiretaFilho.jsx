import React from 'react'

export default props => {
    const ocb = props.onClickBtt
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    // gerar 0 ou 1
    const gerarNerd = () => Math.random() > 0.5

    return(
        <div>
            <div>Filho</div>
            <button onClick={
                function(e){
                    ocb('João',gerarIdade(),gerarNerd())
                }
            }>Fornecer Informações</button>
        </div>
    )
}
/*
onClick recebe uma propriedade anonima (e)
errow function 'e' não esta sendo usado _
<button onClick={e => props.onClickBtt('João',53,true)}>
    Fornecer Informações
</button>
errow function 'e' não esta sendo usado _
<button onClick={_ => props.onClickBtt('João',53,true)}>
    Fornecer Informações
</button>
*/