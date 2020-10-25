import React from 'react'

export default (props) => {
    return(       
        <div>
            <label htmlFor="PassoInput">Passo:</label>
            <input type="number" name="" id="PassoInput"
                value={props.passo} 
                //+ altera o valor de string para numérico
                onChange={e => props.setPasso(+e.target.value)}/>
        </div>  
    )
}