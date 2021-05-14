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
                <div value={this.state.ordem} className="filter-superior">
                    <select onChange={this.onChangeOrdenacao}>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                    <p>Quantidade de Produtos: {quantidadeDeItem}</p>
                </div>

                <div>
                    {produtoFiltrado.map((produto) => {
                        return (
                            <div>
                                <img src={produto.imageUrl} alt={produto.name}></img>
                                <div>
                                    <p>{produto.name}</p>
                                    <p>Valor: {produto.value}</p>
                                    <button>Adicionar ao Carrinho</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </HomeContainer>
        )
    }

}