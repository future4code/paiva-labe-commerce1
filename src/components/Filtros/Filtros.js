import React from 'react';
import { SecaoFiltros } from '../../styles/styled'

export default class Filtros extends React.Component {
    

    render() {


        return (
            <SecaoFiltros>
                <h3>Filtros</h3>
                <label>Valor mínimo: </label>
                <input
                    value={this.props.inputValorMinimo}
                    type="number"
                    onChange={this.props.onChangeValorMin}
                ></input>
                <label>Valor máximo: </label>
                <input
                    value={this.props.inputValorMaximo}
                    type="number"
                    onChange={this.props.onChangeValorMax}
                ></input>
                <label>Busca por nome: </label>
                <input
                    value={this.props.inputValue}
                    type="text"
                    onChange={this.props.onChangeBuscaNome}
                 ></input>
            </SecaoFiltros>
        )
    }
}