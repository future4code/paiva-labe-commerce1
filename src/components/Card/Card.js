import React from 'react';
import { CardContainer } from '../../styles/styled'

export default class Card extends React.Component {

    render() {
        return (
            <CardContainer>
                <img src={this.props.produtoFoto} />
                <div>
                    <p>{this.props.produtoNome}</p>
                    <p>{this.props.produtoPreco}</p>
                    <button onClick="#">Adicionar ao Carrinho</button>
                </div>
            </CardContainer>
        )
    }
}