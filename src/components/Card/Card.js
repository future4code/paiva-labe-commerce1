import React from 'react';
import { CardContainer } from '../../styles/styled'
import Foto1 from '../../img/camisetas/camiseta1.png'

export default class Card extends React.Component {

    render() {
        return (
            <CardContainer>
                <img src={Foto1} />

                <div>
                    <p>Produto 1</p>
                    <p>200,00</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
                
            </CardContainer>
        )
    }
}