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
import Camiseta6 from './img/camisetas/camiseta6.jpg'
import Camiseta7 from './img/camisetas/camiseta7.jpg'
import Camiseta8 from './img/camisetas/camiseta8.jpg'
import Camiseta9 from './img/camisetas/camiseta9.png'


export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Camisa cachorro astronauta",
        value: 135.0,
        imageUrl: Camiseta1
      },
      {
        id: 2,
        name: "T-shirt Dog no foguete",
        value: 79.90,
        imageUrl: Camiseta2
      },
      {
        id: 3,
        name: "Regata plutão",
        value: 125.0,
        imageUrl: Camiseta3
      },
      {
        id: 4,
        name: "E.T Phone Home",
        value: 175.0,
        imageUrl: Camiseta4
      },
      {
        id: 5,
        name: "T-shirt nave espacial",
        value: 210.1,
        imageUrl: Camiseta5
      },
      {
        id: 6,
        name: "Blusa N.A.S.A",
        value: 120.90,
        imageUrl: Camiseta6
      },
      {
        id: 7,
        name: "I come in peace",
        value: 150.0,
        imageUrl: Camiseta7
      },
      {
        id: 8,
        name: "Blusinha NASA",
        value: 49.90,
        imageUrl: Camiseta8
      },
      {
        id: 9,
        name: "Blusa Foguete não tem ré",
        value: 99.0,
        imageUrl: Camiseta9
      }

    ],
    inputValue: "",
    inputValorMinimo: -Infinity,
    inputValorMaximo: +Infinity,
    produtosCarrinho: []
  };

  adicionaItemAoCarrinho = (produto) => {
    const carrinhoTemp = this.state.produtosCarrinho
    const resultadoFiltro = carrinhoTemp.filter((item) => { return item.id === produto.id})
     if (resultadoFiltro.length > 0) {
       const somaCarrinho = carrinhoTemp.map((item)=>{
         if (resultadoFiltro[0].id===item.id) {
           item.quantidade++
         }
         return item
       })
       this.setState({ produtosCarrinho:somaCarrinho})
     } else if (resultadoFiltro.length===0){
       const itemCarrinho = {
         id: produto.id,
         name: produto.name,
         value: produto.value,
         quantidade: 1
       }
       const carrinho = [...this.state.produtosCarrinho, itemCarrinho]
       this.setState({produtosCarrinho:carrinho})
     }
  }

  onChangeBuscaNome = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onChangeValorMin = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeValorMax = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  apagaItemDoCarrinho = (prodCar) => {
    const itensNaoDeletados = this.state.produtosCarrinho.map((prods) =>{
      if (prods.id === prodCar.id) {
        return {...prods, quantidade: prods.quantidade-1}
      } 
        return prods
    }).filter((prods) => prods.quantidade > 0)
    this.setState({ produtosCarrinho: itensNaoDeletados })
  }

  render() {

    return (
      <MainContainer>
        <header>
          <h1>Hello World</h1>
        </header>
        <div className="container-lado-esquerdo">
          
          <Carrinho
          produtosCarrinho={this.state.produtosCarrinho}
          apagaItemDoCarrinho={this.apagaItemDoCarrinho}
          
          />
          <Filtros
            inputValue={this.state.inputValue}
            inputValorMinimo={this.state.inputValorMinimo}
            inputValorMaximo={this.state.inputValorMaximo}
            onChangeBuscaNome={this.onChangeBuscaNome}
            onChangeValorMin={this.onChangeValorMin}
            onChangeValorMax={this.onChangeValorMax}
          />
        </div>
        <Home 
        produtos={this.state.produtos} 
        inputValue={this.state.inputValue} 
        inputValorMaximo={this.state.inputValorMaximo} 
        inputValorMinimo={this.state.inputValorMinimo} id={this.state.id}
        adicionaItemAoCarrinho={this.adicionaItemAoCarrinho}
        />
        <footer>
          <h1>Oi, eu sou um footer !</h1>
        </footer>
        <GlobalStyle />
      </MainContainer>
    );
  }
}
