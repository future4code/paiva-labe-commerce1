import React from 'react';
import { CarrinhoContainer } from '../../styles/styled'

export default class Carrinho extends React.Component {

    render() {
        return (
            <CarrinhoContainer>
                <div>
                    <h3>Carrinho:</h3>
                    <p>2x</p>
                    <p>Produto</p>
                    <button>Remover</button>
                </div>
                <div>
                    <p>2x</p>
                    <p>Produto</p>
                    <button>Remover</button>
                </div>
                <p>Valor total:R$70</p>
            </CarrinhoContainer>
        )
    }
}