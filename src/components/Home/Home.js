import React from 'react'
import { HomeContainer } from '../../styles/styled'

export default class Home extends React.Component {

    state = {
        ordem: "crescente"
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


        const produtoOrdemCrescente = produtoFiltrado.sort((a, b) => {
            return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
        })
        console.log('Ordem Crescente', produtoOrdemCrescente)




        const produtoOrdemDecrescete = produtoFiltrado.reverse((a, b) => {
            return a.value > b.value ? +1 : a.value < b.value ? 0 : 1;
        })
        console.log('Ordem Decrescente', produtoOrdemDecrescete)







        const quantidadeDeItem = (produtoFiltrado.length)

        return (
            <HomeContainer>
                <div className="filter-superior">
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                    <p>Quantidade de Produtos: {quantidadeDeItem}</p>
                </div>

                <div>

                    {produtoFiltrado.map((produto) => {
                        console.log(produto)
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