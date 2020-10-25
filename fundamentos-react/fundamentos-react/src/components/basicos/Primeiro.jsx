import React from 'react'

export default function Primeiro() {
    const msg = 'Seja bem vindo(a)!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    )
}

/*
export default function Primeiro(){
    return 'Primeiro Componente'
}
*/
/*
export default function Primeiro(){
    return <h2>Primeiro Componente</h2>
}
*/