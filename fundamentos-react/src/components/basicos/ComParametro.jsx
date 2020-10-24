import React from 'react'

export default function (props) {
    const sub = props.subtitulo
    // ? = caso contrario 
    const situacao = props.nota >= 6 ? 'Aprovado' : 'Reprovado'
    //Arredonda pra cima
    const nota = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.Titulo}</h2>
            <p>
                <strong>{sub}tem nota {nota} {situacao}</strong>
            </p>
        </div>
    )
}
