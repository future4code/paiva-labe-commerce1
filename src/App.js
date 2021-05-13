import React from 'react';
import { MainContainer } from './styles/styled'
import GlobalStyle from './styles/global'
import Filtros from './components/Filtros/Filtros'
import Home from './components/Home/Home'
import Carrinho from './components/Carrinho/Carrinho'
import Camiseta1 from './img/camisetas/camiseta1.png'
import Camiseta2 from './img/camisetas/camiseta2.png'
import Camiseta3 from './img/camisetas/camiseta3.png'
import Camiseta4 from './img/camisetas/camiseta4.png'
import Camiseta5 from './img/camisetas/camiseta5.png'


export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Camisa Marte",
        value: 100.0,
        imageUrl: Camiseta1
      },
      {
        id: 2,
        name: "T-shirt lua",
        value: 50.0,
        imageUrl: Camiseta2
      },
      {
        id: 3,
        name: "Regata plutão",
        value: 1250.0,
        imageUrl: Camiseta3
      },
      {
        id: 4,
        name: "Regata plutão",
        value: 125.0,
        imageUrl: Camiseta4
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
        <Home produtos={this.state.produtos} inputValue={this.state.inputValue} inputValorMaximo={this.state.inputValorMaximo} inputValorMinimo={this.state.inputValorMinimo} />
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
