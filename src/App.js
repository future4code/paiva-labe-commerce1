import React from 'react';
import { MainContainer } from './styles/styled'
import GlobalStyle from './styles/global'
import Filtros from './components/Filtros/Filtros'
import Home from './components/Home/Home'
import Carrinho from './components/Carrinho/Carrinho'

export default class App extends React.Component {
  state = {

  }
  render() {
    return (
      <MainContainer>
        <Carrinho />
        <Home />
        <Filtros />
        <GlobalStyle />
      </MainContainer>
    );
  }
}
