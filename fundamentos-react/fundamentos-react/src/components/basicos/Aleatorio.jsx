import React from 'react'

export default (props) => {
    //desctruction
    //const { min, max} = props;
    //const [a,b]=[1,2]
    //const { a, b, c} = { a:1, b:3, 'teste'}
    const min = props.min;
    const max = props.max;
    const rand = Math.floor(Math.random() * max+min);
    return (
        <div>
            <h2>Número Aleatório</h2>
            <p>O número gerado entre {min} e {max} foi {rand}</p>
        </div>
    )
}

//Math.floor(Math.random() * 65536) - 32768;
//Math.floor(Math.random() * 10 + 1)
//Math.floor(Math.random() * 10)