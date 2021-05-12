import React from 'react'
import { HomeContainer } from '../../styles/styled'
import Card from '../Card/Card'

export default class Home extends React.Component {

    render() {
        return (
            <HomeContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </HomeContainer>
        )
    }

}