import React from 'react';
import { CardContainer } from '../../styles/styled'
import Foto1 from '../../img/camisetas/camiseta1.png'

export default class Card extends React.Component {

    render() {
        return (
            <CardContainer>
                <img src={Foto1} />
            </CardContainer>
        )
    }
}