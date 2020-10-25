import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {
    
    function listarProdutos(){
        return produtos.map((produto, i) => {
            return(           
                <tr key={produto.id}className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{ produto.id }</td>
                    <td>{ produto.nome }</td>
                    <td>R$ { produto.preco.toFixed(2).replace('.',',') }</td> 
                </tr> 
            )                      
        })
    }

    return (
        <div className="TabelaProdutos"> 
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listarProdutos()}  
                </tbody>                                    
            </table>                       
        </div>
    )
}
/*
const listaProdutos = produtos.map(produto => {
        return(           
            <tr>
                <td>{ produto.id }</td>
                <td>{ produto.nome }</td>
                <td>{ produto.preco },00R$</td> 
            </tr>                    
        )
    })
*/