import React from 'react';
import { MainContainer } from './styles/styled'
import GlobalStyle from './styles/global'
import Filtros from './components/Filtros/Filtros'
import Home from './components/Home/Home'
import Carrinho from './components/Carrinho/Carrinho'

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Camisa Marte",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 2,
        name: "T-shirt lua",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Regata plutão",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      }
    ],
    inputValue: ""
  };
  
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
