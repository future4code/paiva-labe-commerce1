import React from 'react';
import { CarrinhoContainer } from '../../styles/styled'

export default class Carrinho extends React.Component {

    apagaItemDoCarrinho = (itemId) => {
        const copiaListaDoEstado = this.state.produtos.filter((item) => {
            return itemId !== item.id

        })
        this.setState({ produtos: copiaListaDoEstado })

    }

    render() {
        console.log(this.props.produtosCarrinho)
        return (

            <CarrinhoContainer>
                <h3>Carrinho:</h3>
                {this.props.produtosCarrinho.map((prodCarrinho) => {
                    let tamanho = (prodCarrinho.length)
                    console.log(tamanho)
                    // switch (prodCarrinho.length) {
                    //     case value:
                            
                    //         break;
                    
                    //     default:
                    //         break;
                    // }
                    return (
                        <div>
                            <p>{prodCarrinho.name}</p>
                            <button onClick={this.apagaItemDoCarrinho}>Remover</button>
                        </div>)
                })}
                <p>Valor total:R$70</p>
            </CarrinhoContainer>
        )
    }
}