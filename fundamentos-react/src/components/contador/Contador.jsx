import React, { Component } from 'react'
import "./Contador.css"

class Contador extends Component {

    state = {
        //caso não seja iniciado sera 0
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) =>{
        this.setState({
            passo: +evento.target.value,//+ converte de string para inteiro
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="PassoInput">Passo:</label>
                    <input type="number" name="" id="PassoInput"
                        value={this.state.passo} 
                        onChange={this.setPasso}/>
                </div>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>              
            </div>
        )
    }
}

export default Contador
//<p>Valor Inicial: {this.props.numeroInicial}</p>