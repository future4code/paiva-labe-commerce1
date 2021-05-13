import React from 'react'
import { HomeContainer } from '../../styles/styled'
import Card from '../Card/Card'
import camiseta1 from '../../img/camisetas/camiseta1.png'
import camiseta2 from '../../img/camisetas/camiseta2.png'
import camiseta3 from '../../img/camisetas/camiseta3.png'
import camiseta4 from '../../img/camisetas/camiseta4.png'
import camiseta5 from '../../img/camisetas/camiseta5.png'
export default class Home extends React.Component {

    state = {
        ordem: "crescente"
    }
    render() {
        return (
            <HomeContainer>
                <div className="filter-superior">
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                    <p>Quantidade de Produtos: 2</p>
                </div>
                <Card produtoFoto={camiseta1} produtoNome="aaaaaaa" produtoPreco="aaaa" />
                <Card produtoFoto={camiseta2} produtoNome="aaaaaaa" produtoPreco="aaaa" />
                <Card produtoFoto={camiseta3} produtoNome="aaaaaaa" produtoPreco="aaaa" />
                <Card produtoFoto={camiseta4} produtoNome="aaaaaaa" produtoPreco="aaaa" />
                <Card produtoFoto={camiseta5} produtoNome="aaaaaaa" produtoPreco="aaaa" />

            </HomeContainer>
        )
    }

}