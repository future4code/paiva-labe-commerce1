import React from 'react';
import { CarrinhoContainer } from '../../styles/styled'

export default class Carrinho extends React.Component {

    changeTotalValue = () => {
        let valorTotal = 0
        for (let prod of this.props.produtosCarrinho) {
            valorTotal += prod.value * prod.quantidade
        }
        return valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    render() {

        return (

            <CarrinhoContainer>
                <h3>Carrinho</h3>
                {this.props.produtosCarrinho.filter(function (a) {
                    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                }, Object.create(null)).map((prodCarrinho) => {
                    return (
                        <div className="info-carrinho" key={prodCarrinho.name}>
                            <p>{prodCarrinho.quantidade}x</p> 
                            <p>{prodCarrinho.name}</p>
                            <button onClick={() => this.props.apagaItemDoCarrinho(prodCarrinho)}>Remover</button>
                        </div>
                    )
                })
                }
                <p><strong>Valor total:</strong> {this.changeTotalValue()}</p>
            </CarrinhoContainer>
        )
    }
}