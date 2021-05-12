import React from 'react';
import { SecaoFiltros } from '../../styles/styled'

export default class Filtros extends React.Component {

    render() {
        return (
            <SecaoFiltros>
                <h3>Filtros</h3>
                <label>Valor mínimo: </label>
                <input type="number"></input>
                <label>Valor máximo: </label>
                <input type="number"></input>
                <label>Busca por nome: </label>
                <input type="text" placeholder="Produto"></input>
                
            </SecaoFiltros>
            
        )
    }
}