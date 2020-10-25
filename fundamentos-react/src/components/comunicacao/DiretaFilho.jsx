import React from 'react'

export default props => {
    return(
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade} anos</strong> </span>
            <span> nerd - {props.nerd ? 'Verdadeiro':'Falso'}!</span>
        </div>
    )
}