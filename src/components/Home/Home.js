import React from 'react'
import { HomeContainer } from '../../styles/styled'

export default class Home extends React.Component {

    state = {
        ordem: "crescente"
    }

    onChangeOrdenacao = (event) => {
        this.setState({ ordem: event.target.value });
    }

    render() {

        const produtoFiltrado = this.props.produtos
            .filter((item) => {
                if (
                    item.name.toLowerCase().includes(this.props.inputValue.toLowerCase())
                ) {
                    return item.id;
                }
            })
            .filter((item) => {
                if (item.value >= this.props.inputValorMinimo) {
                    return item.id;
                }
            })
            .filter((item) => {
                if (item.value <= this.props.inputValorMaximo) {
                    return item.id;
                }
            });

        if (this.state.ordem === "crescente") {
            produtoFiltrado.sort((a, b) => {
                return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
            })
        } else if (this.state.ordem === "decrescente") {
            produtoFiltrado.sort((a, b) => {
                return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
            })
        }

        const quantidadeDeItem = (produtoFiltrado.length)


        return (
            <HomeContainer>
                <div className="home-container-align">
                    <div className="produtos-container">
                        <div value={this.state.ordem} className="filtro-align">
                            <p>Quantidade de Produtos: {quantidadeDeItem}</p>
                            <select onChange={this.onChangeOrdenacao}>
                                <option value="crescente">Crescente</option>
                                <option value="decrescente">Decrescente</option>
                            </select>

                        </div>
                    </div>
                    <div className="container-do-card">
                        {produtoFiltrado.map((produto) => {
                            const valorConvertidoParaReal = produto.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                            return (
                                <div className="card">
                                    <img src={produto.imageUrl} alt={produto.name} />
                                    <p>{produto.name}</p>
                                    <p><strong>{valorConvertidoParaReal}</strong></p>
                                    <button className="botao"onClick={()=>this.props.adicionaItemAoCarrinho(produto)}  >Adicionar ao Carrinho</button>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </HomeContainer>
        )
    }

}