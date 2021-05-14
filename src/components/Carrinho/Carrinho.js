import React from 'react';
import { CarrinhoContainer } from '../../styles/styled'

export default class Carrinho extends React.Component {

    render() {


        return (

            <CarrinhoContainer>
                <h3>Carrinho:</h3>
                {this.props.produtosCarrinho.filter(function (a) {
                    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                }, Object.create(null)) .map((prodCarrinho) => {

                    return (
                        <div key={prodCarrinho.name}>
                            <p>{prodCarrinho.quantidade}X</p>
                            <p>{prodCarrinho.name}</p>
                            <button onClick={this.apagaItemDoCarrinho}>Remover</button>
                        </div>)
                })
                
                }
                
                <p>Valor total:R$70</p>
            </CarrinhoContainer>
        )
    }
}