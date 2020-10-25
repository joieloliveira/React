import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="João"idade={20}nerd={false}></DiretaFilho>
            <DiretaFilho nome="Pedro"idade={19}nerd={true}></DiretaFilho>
            <DiretaFilho nome="Tiago"idade={17}nerd={true}></DiretaFilho>
        </div>
    )
}