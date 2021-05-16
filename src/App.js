/* eslint-disable jsx-a11y/alt-text */
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
import Header from './components/Header/Header';
import facebookIcon from './img/icon/facebook-app-symbol.svg'
import InstagramIcon from './img/icon/instagram.svg'
import Logo from './img/icon/logo.png'
import GithubLogo from './img/icon/github-big-logo.svg'
import PinterestIcon from './img/icon/pinterest-4.svg'


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
    const resultadoFiltro = carrinhoTemp.filter((item) => { return item.id === produto.id })
    if (resultadoFiltro.length > 0) {
      const somaCarrinho = carrinhoTemp.map((item) => {
        if (resultadoFiltro[0].id === item.id) {
          item.quantidade++
        }
        return item
      })
      this.setState({ produtosCarrinho: somaCarrinho })
    } else if (resultadoFiltro.length === 0) {
      const itemCarrinho = {
        id: produto.id,
        name: produto.name,
        value: produto.value,
        quantidade: 1
      }
      const carrinho = [...this.state.produtosCarrinho, itemCarrinho]
      this.setState({ produtosCarrinho: carrinho })
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
    const itensNaoDeletados = this.state.produtosCarrinho.map((prods) => {
      if (prods.id === prodCar.id) {
        return { ...prods, quantidade: prods.quantidade - 1 }
      }
      return prods
    }).filter((prods) => prods.quantidade > 0)
    this.setState({ produtosCarrinho: itensNaoDeletados })
  }

  render() {

    return (
      <MainContainer>
        <Header></Header>
        <div className="container-lado-direito">
          <Carrinho
            produtosCarrinho={this.state.produtosCarrinho}
            apagaItemDoCarrinho={this.apagaItemDoCarrinho}
          />
        </div>
        <div className="container-lado-esquerdo">
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
          <div className="footer-container">

            <div className="footer-lado-esquerdo">
              <div className="redes-logo">
                <img src={Logo} />
              </div>
              <div className="redes-sociais-lista">
                <img src={facebookIcon} />
                <img src={InstagramIcon} />
                {/* <img src={PinterestIcon} /> */}
              </div>
              <div className="text-dev-align">
                <h3>Desenvolvedores</h3>
              </div>
              <div className="redes-sociais-devs">


                <div className="github-align">

                  <a href="https://www.google.com/br" target="_blank">
                    <img src={GithubLogo} />
                  </a>
                  <a href="https://www.google.com/br" target="_blank">Adrian Américo</a>

                </div>
                <div className="github-align">
                  <a href="https://www.google.com/br" target="_blank">
                    <img src={GithubLogo} />
                  </a>
                  <a href="https://www.google.com/br" target="_black"> Matheus Garrido</a>

                </div>
                <div className="github-align">
                  <a href="https://www.google.com/br" target="_blank">
                    <img src={GithubLogo} />
                  </a>
                  <a href="https://github.com/elizaoliveira88" target="_blank">Tânia Eliza</a>
                </div>
              </div>
            </div>

            <div className="footer-centro">

              <p>Sobre nós</p>
              <p>nossos produtos e estampas</p>
              <p>Perguntas frequentes</p>
              <p>Frete e entrega</p>
              <p>Trocas e devoluções</p>
              <p>Política de privacidade</p>
              <p>Imprensa</p>
              <p>Programa de pontos</p>
              <p>Seja um Afiliado</p>
              <p>Quero revender</p>

            </div>

            <div className="footer-lado-direito">

              <div className="footer-lado-direito-contatos">
                <ul>
                  <li><h3>Cental de Atendimento</h3></li>
                  <li><p>11 12345-6789</p></li>
                  <li><p>teste@lalala.com</p></li>
                  <li><p>Seg a sex das 09h às 18h</p></li>
                </ul>

                
                
                
              </div>
            </div>
          </div>
        </footer >
        <GlobalStyle />
      </MainContainer >
    );
  }
}
