import React from 'react';
import Home from './components/Home/Home'
import { MainContainer } from './styles/styled'
import GlobalStyle from './styles/global'
import Carrinho from './components/Carrinho/Carrinho'
import Cards from './components/Card/Card'
import Filtros from './components/Filtros/Filtros';

export default class App extends React.Component {





  
  state = {
    id: Date.now(),
    name: "",
    url: ''
  }

  render() {
    return (
      <MainContainer>
        <h1>T-shirt Labemoon</h1>
        <Home>
          <Cards/>      
        </Home>
        <Filtros/>
        <Carrinho/>

        <GlobalStyle />
      </MainContainer>
    );
  }
}