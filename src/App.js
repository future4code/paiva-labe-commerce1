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
        value: 100.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 2,
        name: "T-shirt lua",
        value: 50.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Regata plutão",
        value: 125.0,
        imageUrl: "https://picsum.photos/200/200"
      }
    ],
    inputValue: "",
    inputValorMinimo: -Infinity,
    inputValorMaximo: +Infinity
  };
  
  onChangeBuscaNome = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onChangeValorMin = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeValorMax = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };
  render() {

    return (
      <MainContainer>
        <Carrinho />
        <Home produtos={this.state.produtos}/>
        <Filtros  
        inputValue={this.state.inputValue} 
        inputValorMinimo={this.state.inputValorMinimo} 
        inputValorMaximo={this.state.inputValorMaximo}
        onChangeBuscaNome={this.onChangeBuscaNome}
        onChangeValorMin={this.onChangeValorMin}
        onChangeValorMax={this.onChangeValorMax}
        />
        <GlobalStyle />
      </MainContainer>
    );
  }
}
